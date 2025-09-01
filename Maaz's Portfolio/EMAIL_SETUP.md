# Contact Form Email Setup

## Current Status
The contact form is currently using a `mailto:` approach that opens the user's email client. This works but has limitations.

## Option 1: EmailJS Setup (Recommended)
For direct email sending without requiring user's email client:

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Create Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID** (e.g., "gmail")

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template and note your **Template ID** (e.g., "template_abc123")

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., "user_abc123")

### Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
```javascript
export const emailjsConfig = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID',
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID', 
  publicKey: 'YOUR_ACTUAL_PUBLIC_KEY',
};
```

### Step 6: Enable EmailJS
1. Open `src/pages/Contact.jsx`
2. Find the commented EmailJS code (around line 60-80)
3. Uncomment the EmailJS section
4. Comment out the mailto fallback section

## Option 2: Alternative Services
If you prefer other services:

### Formspree
- Go to [Formspree.io](https://formspree.io/)
- Create account and form
- Replace form action with Formspree endpoint

### Netlify Forms
- If deploying to Netlify, add `data-netlify="true"` to form
- Netlify will handle form submissions automatically

## Testing
After setup:
1. Fill out the contact form
2. Submit the form
3. Check your email (bhavnagrimaaz@gmail.com) for the message
4. Verify all fields are received correctly

## Current Fallback
Until EmailJS is configured, the form uses `mailto:` which:
- Opens user's default email client
- Pre-fills the message
- User must manually send the email
- Works on most devices/browsers
