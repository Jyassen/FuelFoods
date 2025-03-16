// Test script using Ethereal Email
const nodemailer = require('nodemailer');

async function testEmailWithEthereal() {
  try {
    console.log('Creating Ethereal Email test account...');
    
    // Create a test account at ethereal.email
    const testAccount = await nodemailer.createTestAccount();
    
    console.log('Test account created:');
    console.log('- Email:', testAccount.user);
    console.log('- Password:', testAccount.pass);
    
    // Create a transporter using the test account
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    
    // Create email options
    const mailOptions = {
      from: '"FuelFoods Website" <test@example.com>',
      to: 'info@fuelfoods.store',
      subject: 'Test Email from Ethereal',
      text: 'This is a test email sent using Ethereal Email.',
      html: '<p>This is a test email sent using <b>Ethereal Email</b>.</p>',
    };
    
    // Send email
    console.log('Sending test email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
    console.log('✅ Test successful! Check the preview URL to view the email.');
  } catch (error) {
    console.error('❌ Error testing email:', error);
  }
}

testEmailWithEthereal(); 