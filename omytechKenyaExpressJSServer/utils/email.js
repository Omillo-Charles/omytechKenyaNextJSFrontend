import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASSWORD, EMAIL_FROM } from '../config/env.js';
import { 
  getContactConfirmationTemplate,
  getHostContactNotificationTemplate
} from './emailTemplates.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

export const sendContactEmail = async (name, email, phone, subject, message) => {
  try {
    // 1. Send confirmation to user
    const userMailOptions = {
      from: EMAIL_FROM,
      to: email,
      subject: `Message Received - Omytech Kenya`,
      html: getContactConfirmationTemplate(name),
    };

    // 2. Send notification to host
    const hostMailOptions = {
      from: EMAIL_FROM,
      to: EMAIL_FROM,
      subject: `New Contact Form: ${subject}`,
      html: getHostContactNotificationTemplate(name, email, phone, subject, message),
    };

    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(hostMailOptions)
    ]);

    console.log('Contact emails sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact emails:', error);
    return false;
  }
};
