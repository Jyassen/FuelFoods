# FuelFoods Website Setup Instructions

This document provides step-by-step instructions for setting up and running the FuelFoods website.

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jyassen/FuelFoods.git
   cd FuelFoods
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Configuration

### Email Setup

For the contact forms to work properly, you need to configure email credentials:

1. Create or edit the `.env.local` file in the project root
2. Add the following environment variables:

```
# Email Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=recipient@example.com
```

### Getting a Gmail App Password

1. Go to your Google Account > Security
2. Under "Signing in to Google," select 2-Step Verification
3. At the bottom of the page, select App passwords
4. Select "Mail" as the app and "Other" as the device, name it "FuelFoods Website"
5. Copy the generated 16-character password and paste it in your `.env.local` file

## Running the Development Server

```bash
npm run dev -- --no-turbo
# or
yarn dev --no-turbo
```

The `--no-turbo` flag disables Turbopack, which can cause issues with the current setup.

## Troubleshooting

### Missing Images

If you encounter missing images, make sure:

1. All image files are in the correct directories under `public/images/`
2. The image paths in the code match the actual file paths

### Form Submission Issues

If form submissions aren't working:

1. Check the browser console for errors
2. Verify your email credentials in `.env.local`
3. Make sure you're using an App Password for Gmail, not your regular password
4. Check that 2-Step Verification is enabled for your Google account

### Mobile Navigation Issues

If the mobile navigation isn't working properly:

1. Clear your browser cache
2. Try a different browser
3. Check for JavaScript errors in the console

## Project Structure

- `app/` - Next.js app directory
  - `api/` - API routes
  - `components/` - React components
  - `hooks/` - Custom React hooks
- `public/` - Static assets
  - `images/` - Image files

## Contact

If you encounter any issues, please contact the development team at support@fuelfoods.com.