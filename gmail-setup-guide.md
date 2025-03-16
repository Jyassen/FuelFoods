# Gmail App Password Setup Guide

This guide will help you set up an App Password for your Gmail account, which is required for sending emails from your application.

## What is an App Password?

An App Password is a 16-character code that gives a less secure app or device permission to access your Google Account. App passwords are needed when you have 2-Step Verification enabled on your Google account and want to use applications that don't support the standard Google sign-in process.

## Prerequisites

- A Google account with 2-Step Verification enabled
- Access to your Google account settings

## Step-by-Step Instructions

### 1. Enable 2-Step Verification (if not already enabled)

1. Go to your [Google Account](https://myaccount.google.com/)
2. In the navigation panel, select **Security**
3. Under "Signing in to Google," select **2-Step Verification**
4. Follow the on-screen steps to enable 2-Step Verification

### 2. Generate an App Password

1. Go to your [Google Account](https://myaccount.google.com/)
2. In the navigation panel, select **Security**
3. Under "Signing in to Google," select **App passwords**
   - Note: If you don't see this option, it might be because:
     - 2-Step Verification is not set up for your account
     - 2-Step Verification is set up but not enabled
     - Your account is through work, school, or another organization
     - You've turned on Advanced Protection for your account

4. At the bottom, select **Select app** and choose **Mail**
   - If you don't see a dropdown, you might just see a single field to enter a name
   
5. Select **Select device** and choose **Other (Custom name)**
   - Enter "FuelFoods Website" or any name that helps you remember what this password is for
   - If you only see one field, just enter a descriptive name like "FuelFoods Mail"

6. Select **Generate**

7. Google will display a 16-character app password. **Copy this password**
   - The password may be shown with spaces, but you should remove all spaces when using it in your application

8. Select **Done**

### 3. Update Your .env.local File

1. Open your `.env.local` file in your project
2. Update the `GMAIL_APP_PASSWORD` value with the app password you just generated:

```
GMAIL_APP_PASSWORD=your16charpassword
```

3. Save the file and restart your Next.js server

## Troubleshooting

If you're still having authentication issues after setting up your app password, try these steps:

1. **Generate a new app password**: App passwords can sometimes become invalid. Try generating a new one.

2. **Check for spaces**: Make sure you've removed all spaces from the app password.

3. **Verify your email address**: Ensure that the `GMAIL_USER` in your `.env.local` file matches exactly with your Gmail address.

4. **Check account restrictions**: If you're using a Google Workspace account, your administrator might have disabled less secure app access.

5. **Try a different Google account**: If possible, try setting up with a personal Gmail account instead of a Google Workspace account.

6. **Check for security alerts**: Log in to your Google account and check for any security alerts that might be blocking the authentication.

7. **Allow less secure apps**: As a last resort (not recommended for production), you can try enabling "Less secure app access" in your Google account security settings.

## Testing Your Setup

After setting up your app password, you can test if it's working correctly by running:

```
node test-gmail.js
```

This script will attempt to authenticate with Gmail using your credentials and send a test email.

## Using Ethereal Email for Testing

If you continue to have issues with Gmail authentication, your application will automatically fall back to using Ethereal Email for testing purposes. Ethereal Email is a fake SMTP service that allows you to test email sending functionality without actually delivering emails.

When using Ethereal Email, the test emails won't be delivered to real recipients, but you'll receive a preview URL where you can view the email content. 