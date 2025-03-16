// Test script for Gmail authentication
const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testGmailAuth() {
  try {
    console.log('=== Gmail Authentication Test ===');
    console.log('This script tests if your Gmail credentials are working correctly.');
    
    // Check if Gmail credentials are available
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('❌ Gmail credentials not found in .env.local file');
      console.log('Make sure GMAIL_USER and GMAIL_APP_PASSWORD are set in .env.local');
      return;
    }
    
    // Check if app password looks valid
    const appPassword = process.env.GMAIL_APP_PASSWORD;
    if (appPassword === 'your_16_character_app_password_here') {
      console.error('❌ You need to replace the placeholder with your actual app password');
      console.log('Edit .env.local and update the GMAIL_APP_PASSWORD value');
      return;
    }
    
    if (appPassword.length !== 16) {
      console.warn('⚠️ Warning: App passwords are typically 16 characters long.');
      console.log(`Your password is ${appPassword.length} characters long.`);
    }
    
    console.log(`Using Gmail account: ${process.env.GMAIL_USER}`);
    console.log('App password length: ' + '*'.repeat(appPassword.length) + ` (${appPassword.length} characters)`);
    
    // Create a transporter using Gmail
    console.log('\nCreating Gmail transporter...');
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    
    // Verify the connection
    console.log('Verifying connection to Gmail...');
    await transporter.verify();
    console.log('✅ Gmail authentication successful!');
    
    // Create email options
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'info@fuelfoods.store',
      subject: 'Test Email from Gmail',
      text: 'This is a test email sent using Gmail.',
      html: '<p>This is a test email sent using <b>Gmail</b>.</p>',
    };
    
    // Send email
    console.log('\nSending test email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Message sent: %s', info.messageId);
    console.log('✅ Test successful! Email sent via Gmail.');
  } catch (error) {
    console.error('\n❌ Error testing Gmail:', error);
    
    // Provide troubleshooting guidance based on the error
    if (error.code === 'EAUTH') {
      console.log('\n=== Troubleshooting Steps ===');
      console.log('1. Make sure you\'ve generated an App Password, not using your regular Gmail password');
      console.log('2. Verify that 2-Step Verification is enabled for your Google account');
      console.log('3. Check that you\'ve copied the App Password correctly (16 characters, no spaces)');
      console.log('4. Try generating a new App Password');
      console.log('5. Make sure you\'re using the correct Gmail address');
      console.log('6. If using a Google Workspace account, ensure that SMTP access is enabled');
      console.log('\nFor more information, visit: https://support.google.com/mail/?p=BadCredentials');
    }
  }
}

testGmailAuth(); 