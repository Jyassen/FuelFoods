// Script to update Gmail app password in .env.local
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('=== Gmail App Password Update Tool ===');
console.log('This tool will update your Gmail app password in the .env.local file.');
console.log('');
console.log('To generate an App Password:');
console.log('1. Go to your Google Account settings: https://myaccount.google.com/');
console.log('2. Select "Security" from the left menu');
console.log('3. Under "Signing in to Google", select "2-Step Verification" (enable if not already)');
console.log('4. Scroll down and select "App passwords"');
console.log('5. Select "Mail" as the app and "Other" as the device (name it "FuelFoods Website")');
console.log('6. Click "Generate" and copy the 16-character password (no spaces)');
console.log('');

rl.question('Enter your 16-character Gmail app password: ', (password) => {
  // Basic validation
  if (password.length !== 16) {
    console.log('Warning: App passwords are typically 16 characters long without spaces.');
    console.log('The password you entered is ' + password.length + ' characters.');
    
    rl.question('Do you want to continue anyway? (y/n): ', (answer) => {
      if (answer.toLowerCase() !== 'y') {
        console.log('Operation cancelled. Please try again with a valid app password.');
        rl.close();
        return;
      }
      updatePassword(password);
    });
  } else {
    updatePassword(password);
  }
});

function updatePassword(password) {
  try {
    // Read the current .env.local file
    const envPath = '.env.local';
    let envContent = fs.readFileSync(envPath, 'utf8');
    
    // Replace the app password line
    envContent = envContent.replace(
      /GMAIL_APP_PASSWORD=.*/,
      `GMAIL_APP_PASSWORD=${password}`
    );
    
    // Write the updated content back to the file
    fs.writeFileSync(envPath, envContent);
    
    console.log('');
    console.log('✅ Success! Your Gmail app password has been updated in .env.local');
    console.log('You can now test the Gmail authentication with: node test-gmail.js');
  } catch (error) {
    console.error('❌ Error updating .env.local file:', error.message);
  } finally {
    rl.close();
  }
} 