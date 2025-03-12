import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter prioritizing Gmail and falling back to Ethereal Email for testing
const createTransporter = async () => {
  // Try Gmail first if credentials are available
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    try {
      const gmailTransporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });
      
      // Verify the connection
      await gmailTransporter.verify();
      console.log('Gmail authentication successful!');
      
      return {
        transporter: gmailTransporter,
        isEthereal: false
      };
    } catch (gmailError) {
      console.error('Error creating Gmail transporter:', gmailError);
      console.log('Falling back to Ethereal Email...');
    }
  }
  
  // Fallback to Ethereal Email for testing
  try {
    const testAccount = await nodemailer.createTestAccount();
    
    // Log the test account credentials
    console.log('Ethereal Email test account created:');
    console.log('- Email:', testAccount.user);
    console.log('- Password:', testAccount.pass);
    
    // Create a transporter using the test account
    return {
      transporter: nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      }),
      isEthereal: true
    };
  } catch (error) {
    console.error('Error creating Ethereal Email transporter:', error);
    return { transporter: null, isEthereal: false };
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, formType, restaurant } = body;

    // Validate the required fields
    if (!name || !email || !message) {
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

    // Create email options
    const mailOptions = {
      from: process.env.GMAIL_USER || '"FuelFoods Website" <test@example.com>',
      to: 'info@fuelfoods.store',
      subject: `New message from ${formType || 'Contact Form'} - ${name}`,
      text: emailContent,
      replyTo: email, // Set reply-to as the sender's email
    };

    // Create transporter
    const { transporter, isEthereal } = await createTransporter();
    if (!transporter) {
      console.log('Email transporter not configured. Email would be sent to info@fuelfoods.store:');
      console.log(emailContent);
      
      // Return success even though email wasn't sent (for development)
      return NextResponse.json({ 
        success: true, 
        debug: 'Email transporter not configured',
        emailContent: emailContent // Include email content in development mode
      });
    }

    // Send email using Nodemailer
    try {
      const info = await transporter.sendMail(mailOptions);
      
      // If using Ethereal Email, provide the preview URL
      if (info.messageId && isEthereal) {
        const previewURL = nodemailer.getTestMessageUrl(info);
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', previewURL);
        
        return NextResponse.json({ 
          success: true,
          previewURL: previewURL,
          messageId: info.messageId,
          isTest: true
        });
      }
      
      return NextResponse.json({ 
        success: true,
        messageId: info.messageId,
        isTest: isEthereal,
        provider: isEthereal ? 'ethereal' : 'gmail'
      });
    } catch (emailError: any) {
      console.error('Error sending email:', emailError);
      
      // In development, provide more detailed error information
      const isDev = process.env.NODE_ENV === 'development';
      return NextResponse.json(
        { 
          error: 'Failed to send email', 
          details: isDev ? emailError.message : undefined,
          code: isDev ? emailError.code : undefined
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error processing contact form:', error);
    
    // In development, provide more detailed error information
    const isDev = process.env.NODE_ENV === 'development';
    return NextResponse.json(
      { 
        error: 'Failed to process request',
        details: isDev ? error.message : undefined
      },
      { status: 500 }
    );
  }
} 