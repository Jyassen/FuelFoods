import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Helper function to log form submissions
function logSubmission(data: any) {
  const { name, email, message, formType } = data;
  console.log(`[${new Date().toISOString()}] New ${formType || 'contact'} form submission from ${name} (${email})`);
  
  try {
    // Create submissions directory if it doesn't exist
    const submissionsDir = path.join(process.cwd(), 'submissions');
    if (!fs.existsSync(submissionsDir)) {
      fs.mkdirSync(submissionsDir, { recursive: true });
    }
    
    // Write submission to file as backup
    fs.writeFileSync(
      path.join(submissionsDir, `${Date.now()}-${email.replace(/[^a-zA-Z0-9]/g, '_')}.json`),
      JSON.stringify({
        ...data,
        timestamp: new Date().toISOString()
      }, null, 2)
    );
  } catch (error) {
    console.error('Failed to save submission to file:', error);
    // Continue execution even if file saving fails
  }
}

// Helper function to create email content
function createEmailContent(data: any) {
  const { name, email, phone, message, formType, restaurant } = data;
  
  let content = `Name: ${name}\n`;
  content += `Email: ${email}\n`;
  
  if (phone) content += `Phone: ${phone}\n`;
  if (restaurant) content += `Restaurant: ${restaurant}\n`;
  if (formType) content += `Form Type: ${formType}\n`;
  
  content += `\nMessage:\n${message}\n`;
  content += `\nSubmitted at: ${new Date().toISOString()}\n`;
  
  return content;
}

// Main API handler
export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.warn('Missing required fields in form submission');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log submission for backup
    logSubmission(body);
    
    // Create email content
    const emailContent = createEmailContent(body);

    // Get email configuration
    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || emailUser;

    // Check if email credentials are available
    if (!emailUser || !emailPass) {
      console.warn('Email credentials not configured, skipping email send');
      return NextResponse.json({ 
        success: true, 
        message: 'Form submission received. Our team will contact you soon.'
      });
    }

    try {
      // Create email transporter with extended timeouts
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        connectionTimeout: 10000,
        socketTimeout: 20000
      });

      // Configure email options
      const mailOptions = {
        from: emailUser,
        to: recipientEmail,
        subject: `New ${body.formType || 'Contact Form'} Submission from ${name}`,
        text: emailContent,
        replyTo: email,
      };

      // Send email with timeout handling
      const emailResult = await Promise.race([
        transporter.sendMail(mailOptions),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email sending timed out')), 30000)
        )
      ]);

      console.log('Email sent successfully:', emailResult);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.'
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Still return success to the user, but log the error
      return NextResponse.json({ 
        success: true, 
        message: 'Form submission received. Our team will contact you soon.'
      });
    }
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}

// GET handler to confirm API is working
export async function GET() {
  return NextResponse.json({ status: 'Contact API is operational' });
}

// Export configuration
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; 