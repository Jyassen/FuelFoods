# Contact Form Setup for FuelFoods

This document provides instructions on how to set up and use the contact forms in the FuelFoods website.

## Overview

The website includes three contact forms:

1. **Hero Contact Form** - Located in the hero section as a modal popup
2. **Contact Form Modal** - A reusable modal component used in other parts of the site
3. **Partnership Request Form** - Located in the "Partner with us" section

All forms are connected to a central API endpoint that sends emails using Gmail.

## Setup Instructions

### 1. Install Dependencies

The Nodemailer package is required for email functionality:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 2. Set Up Gmail App Password

To use Gmail for sending emails, you need to create an App Password:

1. Go to your Google Account > Security
2. Enable 2-Step Verification if not already enabled
3. Go to App passwords (under "Signing in to Google")
4. Select "Mail" as the app and "Other" as the device
5. Enter a name (e.g., "FuelFoods Website")
6. Copy the generated 16-character password

### 3. Configure Environment Variables

1. Update the `.env.local` file with your Gmail credentials:

```
GMAIL_USER=info@fuelfoods.store
GMAIL_APP_PASSWORD=your_app_password_here
```

2. Replace `your_app_password_here` with the App Password you generated in step 2.

### 4. Deploy to Production

When deploying to production (e.g., Vercel), add the environment variables to your hosting platform:

1. In Vercel, go to your project settings
2. Navigate to the "Environment Variables" section
3. Add the same variables as in your `.env.local` file

## How It Works

1. When a user submits a form, the data is sent to the `/api/contact` API endpoint
2. The API validates the required fields (name, email, message)
3. If valid, it constructs an email and sends it using Nodemailer with Gmail
4. The email is sent to `info@fuelfoods.store` with details from the form
5. The user receives a success or error message

## Troubleshooting

### Common Issues

1. **"Failed to send email" error**:
   - Check that your Gmail App Password is correct
   - Verify that 2-Step Verification is enabled for your Google account
   - Check server logs for more detailed error messages

2. **Form submission not working**:
   - Check browser console for JavaScript errors
   - Verify that the API endpoint is accessible
   - Ensure all required fields are filled out

3. **Emails not being received**:
   - Check spam/junk folder
   - Verify Gmail account status
   - Check if your Gmail account has reached sending limits (2,000 emails per day for regular Gmail accounts)

### Testing the API

You can test the API endpoint using the included test script:

```bash
node test-api.js
```

This will send a test submission to the API and log the response.

## Customization

### Email Templates

To customize the email content, edit the `emailContent` variable in `app/api/contact/route.ts`.

### Form Fields

To add or modify form fields:

1. Update the form component's state in the relevant component file
2. Add the new field to the form JSX
3. Update the API route to handle the new field

## Support

For questions or issues, please contact the development team. 