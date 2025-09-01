// EmailJS Configuration
// To set up EmailJS for direct email sending:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template
// 4. Get your Public Key, Service ID, and Template ID
// 5. Replace the placeholder values below

export const emailjsConfig = {
  // Using EmailJS default service for immediate functionality
  serviceId: 'service_default', // Default service
  templateId: 'template_default', // Default template
  publicKey: 'public_key_default', // Will be replaced with actual key
};

// Email template variables that will be sent
export const emailTemplateParams = {
  to_email: 'bhavnagrimaaz@gmail.com',
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};

// For now, we're using mailto as a fallback
// Once you set up EmailJS, uncomment the EmailJS code in Contact.jsx
