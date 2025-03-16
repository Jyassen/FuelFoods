// Test script for the contact API route
const fetch = require('node-fetch');

async function testContactAPI() {
  try {
    console.log('Testing contact API route...');
    
    // Sample contact form data
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '123-456-7890',
      message: 'This is a test message from the API test script.',
      formType: 'API Test'
    };
    
    // Send POST request to the API route
    console.log('Sending request to /api/contact...');
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    // Parse the response
    const data = await response.json();
    
    // Log the response status and data
    console.log('Response status:', response.status);
    console.log('Response data:', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('✅ API test successful!');
      
      // If it's a test email with a preview URL, log it
      if (data.previewURL) {
        console.log('Preview URL:', data.previewURL);
        console.log('You can view the test email at the above URL');
      }
    } else {
      console.error('❌ API test failed with status', response.status);
    }
  } catch (error) {
    console.error('❌ Error testing API:', error);
  }
}

testContactAPI(); 