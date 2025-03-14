// Test script to verify email configuration
require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmailConfig() {
  console.log('Testing email configuration...');
  
  // Get email configuration from environment variables
  const emailUser = process.env.GMAIL_USER;
  const emailPass = process.env.GMAIL_APP_PASSWORD;
  const recipientEmail = process.env.RECIPIENT_EMAIL || emailUser;
  
  console.log(`Email User: ${emailUser}`);
  console.log(`Recipient: ${recipientEmail}`);
  console.log(`App Password configured: ${emailPass ? 'Yes' : 'No'}`);
  
  if (!emailUser || !emailPass) {
    console.error('Email credentials not configured. Please check your .env.local file.');
    return;
  }
  
  try {
    // Create email transporter
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
      subject: 'FuelFoods Email Configuration Test',
      text: `This is a test email to verify your email configuration is working correctly.
      
Timestamp: ${new Date().toISOString()}
      
If you received this email, your email configuration is working correctly!
      
Best regards,
FuelFoods Team`,
    };
    
    // Send the email
    console.log('Sending test email...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

// Run the test
testEmailConfig()
  .then(success => {
    if (success) {
      console.log('Email configuration test completed successfully!');
    } else {
      console.log('Email configuration test failed. Please check the error messages above.');
    }
  })
  .catch(error => {
    console.error('Unexpected error during test:', error);
  }); 