# Gmail App Password Setup Guide

This guide will walk you through the process of setting up a Gmail App Password for your FuelFoods website contact forms.

## Why You Need an App Password

When using Gmail to send emails from your application, you can't use your regular Gmail password due to security restrictions. Instead, you need to create an "App Password" - a 16-character code that gives your application permission to access your Gmail account.

## Prerequisites

- You must have 2-Step Verification enabled on your Google Account
- You need access to the info@fuelfoods.store Gmail account

## Step-by-Step Instructions

### 1. Enable 2-Step Verification (if not already enabled)

1. Go to your [Google Account](https://myaccount.google.com/)
2. Select "Security" from the left navigation panel
3. Under "Signing in to Google," select "2-Step Verification"
4. Follow the on-screen steps to turn on 2-Step Verification

### 2. Create an App Password

1. Go to your [Google Account](https://myaccount.google.com/)
2. Select "Security" from the left navigation panel
3. Under "Signing in to Google," select "App passwords"
   - Note: This option only appears if 2-Step Verification is enabled
4. At the bottom, click "Select app" and choose "Mail"
5. Click "Select device" and choose "Other (Custom name)"
6. Enter "FuelFoods Website" as the name
7. Click "Generate"
8. The App Password will be displayed as a 16-character code (with spaces)
9. Copy this code (you won't be able to see it again)

### 3. Update Your Environment Variables

1. Open the `.env.local` file in your project
2. Update the `GMAIL_APP_PASSWORD` variable with your new App Password:
   ```
   GMAIL_APP_PASSWORD=your16charactercode
   ```
   - Note: Remove any spaces from the App Password when adding it to the file
3. Save the file

### 4. Restart Your Development Server

After updating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

### 5. Test the Contact Forms

1. Fill out and submit one of the contact forms on your website
2. Check the info@fuelfoods.store inbox to verify that the email was received

## Troubleshooting

### Common Issues

1. **"Invalid login" error**:
   - Make sure you've entered the App Password correctly (no spaces)
   - Verify that you're using the correct Gmail address (info@fuelfoods.store)
   - Try generating a new App Password

2. **"Username and Password not accepted" error**:
   - Ensure 2-Step Verification is enabled
   - Check if your Google Account has any security restrictions

3. **"Less secure app access" messages**:
   - App Passwords don't require "Less secure app access" to be enabled
   - This setting is deprecated by Google and should not be used

## Security Considerations

- Never share your App Password with anyone
- If you suspect your App Password has been compromised, revoke it immediately in your Google Account settings
- App Passwords give full access to your Gmail account, so use them carefully
- Consider creating a separate Gmail account specifically for your website if you have security concerns

## For Production Deployment

When deploying to production:

1. Add the `GMAIL_USER` and `GMAIL_APP_PASSWORD` environment variables to your hosting platform (e.g., Vercel)
2. Keep these values secret and never commit them to your code repository
3. You may want to set up email monitoring to ensure deliverability 