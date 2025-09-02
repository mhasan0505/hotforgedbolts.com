# EmailJS Setup Instructions

This guide will help you set up EmailJS to enable email functionality for the contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set up your template with the following variables:

### Template Settings:
- **Template Name**: Contact Form Submission
- **Subject**: `New Contact Form Submission from {{from_name}}`
- **To Email**: `info@hotforgedbolts.com`
- **From Name**: `{{from_name}}`
- **Reply To**: `{{reply_to}}`

### Template Content:
```
Hello,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Please reply to: {{reply_to}}

Best regards,
Hot Forged Bolts Website
```

4. Save the template and note down the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `user_abcdef123456`)

## Step 5: Update Configuration

1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual EmailJS credentials:

```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id',     // Replace with your Service ID
  templateId: 'your_actual_template_id',   // Replace with your Template ID
  publicKey: 'your_actual_public_key',     // Replace with your Public Key
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email at `info@hotforgedbolts.com` for the message

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error**:
   - Check that all credentials are correct
   - Verify your EmailJS service is active
   - Check browser console for detailed error messages

2. **Email not received**:
   - Check spam/junk folder
   - Verify the template is configured correctly
   - Ensure `info@hotforgedbolts.com` is set as the recipient

3. **Template variables not working**:
   - Make sure variable names match exactly (case-sensitive)
   - Check that all required variables are included in the template

### EmailJS Limits:
- Free plan: 200 emails/month
- Rate limit: 1 email per second

## Security Notes

- The public key is safe to use in client-side code
- EmailJS handles the actual email sending securely
- No sensitive credentials are exposed in the frontend

## Support

For additional help:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)