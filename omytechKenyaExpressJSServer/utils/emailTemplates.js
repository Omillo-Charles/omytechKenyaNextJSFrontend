const BRAND_COLORS = {
  primary: '#0072ce',
  accent: '#00aeef',
  dark: '#0b1c36',
  light: '#f5f7fa',
  white: '#ffffff',
  text: '#333333',
  muted: '#777777',
  border: '#e1e1e1',
  success: '#10b981',
  error: '#ef4444'
};

const baseStyle = `
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: ${BRAND_COLORS.text};
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid ${BRAND_COLORS.border};
  border-radius: 10px;
  background-color: ${BRAND_COLORS.white};
`;

const headerStyle = `
  background-color: ${BRAND_COLORS.primary};
  color: white;
  padding: 25px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  margin: -20px -20px 20px -20px;
`;

const footerStyle = `
  margin-top: 30px;
  font-size: 12px;
  color: ${BRAND_COLORS.muted};
  text-align: center;
  border-top: 1px solid ${BRAND_COLORS.border};
  padding-top: 20px;
`;

export const getContactConfirmationTemplate = (name) => {
  return `
    <div style="${baseStyle}">
      <div style="${headerStyle}">
        <h1 style="margin: 0; font-size: 24px; letter-spacing: 1px;">OMYTECH KENYA</h1>
      </div>
      <p>Hi <strong>${name}</strong>,</p>
      <p>Thank you for contacting Omytech Kenya! We've received your message and our team will get back to you as soon as possible.</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid ${BRAND_COLORS.primary}; margin: 25px 0;">
        <p style="margin: 0; color: ${BRAND_COLORS.dark};">We typically respond within 24 hours during business days.</p>
      </div>

      <p>If your matter is urgent, feel free to reach out to us via our official phone lines or visit our office.</p>
      
      <div style="${footerStyle}">
        <p>&copy; ${new Date().getFullYear()} Omytech Kenya. All rights reserved.</p>
        <p>Innovating the Digital Frontier | Nairobi, Kenya</p>
      </div>
    </div>
  `;
};

export const getHostContactNotificationTemplate = (name, email, phone, subject, message) => {
  return `
    <div style="${baseStyle}">
      <div style="${headerStyle}">
        <h1 style="margin: 0; font-size: 20px;">New Contact Message</h1>
      </div>
      <p>You have received a new contact form submission:</p>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid ${BRAND_COLORS.border}; margin: 20px 0;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: none; border-top: 1px solid ${BRAND_COLORS.border}; margin: 15px 0;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>

      <div style="${footerStyle}">
        <p>Omytech Kenya Backend Notification</p>
      </div>
    </div>
  `;
};
