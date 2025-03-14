import { NextResponse } from 'next/server';

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
    
    // Return success for now
    return NextResponse.json({ 
      success: true, 
      message: 'Form submission received. Email functionality will be enabled soon.'
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Ensure the file is recognized as a module
export const runtime = 'edge'; // Optional: Use Edge runtime 