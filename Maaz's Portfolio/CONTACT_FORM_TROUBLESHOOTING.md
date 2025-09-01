# Contact Form Troubleshooting

## Issue: Messages not reaching your inbox

### Step 1: Verify Web3Forms Setup
1. Go to [Web3Forms.com](https://web3forms.com/)
2. Log in to your account
3. Check if your API key `7c10bfc6-13d0-4184-8a0e-fb43e230592a` is active
4. Verify the email address is set to `bhavnagrimaaz@gmail.com`

### Step 2: Check Email Settings
1. Check your Gmail spam/junk folder
2. Check if emails are being filtered
3. Add `noreply@web3forms.com` to your contacts

### Step 3: Test the Form
1. Open browser developer tools (F12)
2. Go to Network tab
3. Submit the contact form
4. Check if the request to `api.web3forms.com` succeeds
5. Look for any error messages in the Console tab

### Step 4: Alternative Solutions

#### Option A: Use Formspree (Recommended)
1. Go to [Formspree.io](https://formspree.io/)
2. Create account with `bhavnagrimaaz@gmail.com`
3. Create new form
4. Get form endpoint (looks like `https://formspree.io/f/xpzgwqjq`)
5. Replace the form action in Contact.jsx

#### Option B: Use EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create account
3. Set up Gmail service
4. Create email template
5. Update the config

#### Option C: Use Netlify Forms (if deploying to Netlify)
1. Add `data-netlify="true"` to the form
2. Netlify will handle form submissions automatically

### Step 5: Debug Information
- Current API Key: `7c10bfc6-13d0-4184-8a0e-fb43e230592a`
- Target Email: `bhavnagrimaaz@gmail.com`
- Form Endpoint: `https://api.web3forms.com/submit`

### Common Issues:
1. **API Key Invalid**: Get a new key from Web3Forms
2. **Email in Spam**: Check spam folder
3. **CORS Issues**: Use FormData instead of JSON
4. **Rate Limiting**: Web3Forms has limits on free plan

### Quick Fix:
If Web3Forms isn't working, switch to Formspree - it's more reliable and easier to set up.
