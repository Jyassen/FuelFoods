import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the handler for POST requests
export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    
    const body = await request.json();
    const { name, email, phone, message, formType, restaurant } = body;
    
    console.log('Form submission details:', { 
      formType, 
      name, 
      email, 
      restaurant: restaurant || 'Not provided' 
    });

    // Validate the required fields
    if (!name || !email || !message) {
      console.log('Validation failed: Missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Construct the email content
    const emailContent = `
      New message from ${formType || 'Contact Form'}:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      ${restaurant ? `Restaurant: ${restaurant}` : ''}
      
      Message:
      ${message}
    `;
    
    console.log('Email content prepared');

    // Get email configuration from environment variables
    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = 'info@fuelfoods.store'; // Hardcoded recipient email
    
    console.log('Email configuration:', { 
      emailUser: emailUser ? 'Set' : 'Not set', 
      emailPass: emailPass ? 'Set' : 'Not set',
      recipientEmail
    });

    // Check if email credentials are available
    if (!emailUser || !emailPass) {
      console.log('Email credentials not configured, skipping email send');
      return NextResponse.json({ 
        success: true, 
        message: 'Form submission received. Email functionality will be enabled soon.'
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Configure email options
    const mailOptions = {
      from: emailUser,
      to: recipientEmail,
      subject: `New ${formType || 'Contact Form'} Submission from ${name}`,
      text: emailContent,
      replyTo: email,
    };
    
    console.log('Sending email to:', recipientEmail);

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
      
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.'
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      // Still return success to the user, but log the error
      return NextResponse.json({ 
        success: true, 
        message: 'Form submission received. Our team will contact you soon.',
        error: 'Email delivery issue, but submission was recorded'
      });
    }
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Define a GET handler to ensure the file is recognized as a proper route module
export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint is working' });
}

// Export configuration
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; 