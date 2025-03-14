import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the handler for POST requests
export async function POST(request: Request) {
  try {
    console.log('Received contact form submission');
    
    const body = await request.json();
    const { name, email, phone, message, formType, restaurant } = body;

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Log the form submission for backup
    console.log('Form submission details:', {
      name,
      email,
      phone,
      message: message.substring(0, 50) + (message.length > 50 ? '...' : ''),
      formType,
      restaurant,
      timestamp: new Date().toISOString()
    });

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

    // Get email configuration from environment variables
    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || emailUser;

    // Check if email credentials are available
    if (!emailUser || !emailPass) {
      console.log('Email credentials not configured, skipping email send');
      
      // Always return success to the user even if email isn't sent
      return NextResponse.json({ 
        success: true, 
        message: 'Form submission received. Our team will contact you soon.'
      });
    }

    try {
      // Create email transporter
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
        // Increase timeout to handle slow connections
        connectionTimeout: 10000,
        socketTimeout: 20000
      });

      // Configure email options
      const mailOptions = {
        from: emailUser,
        to: recipientEmail,
        subject: `New ${formType || 'Contact Form'} Submission from ${name}`,
        text: emailContent,
        replyTo: email,
      };

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

// Define a GET handler to ensure the file is recognized as a proper route module
export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint is working' });
}

// Export configuration
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs'; 