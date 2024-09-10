import sgMail from '@sendgrid/mail';
import { UserModel } from './auth/type';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function sendEmail(user: UserModel) {
  try {
    const msg = {
      to: user.email,
      from: process.env.MAIL_FROM as string,
      subject: 'Test Email from SendGrid',
      text: 'This is a test email sent using SendGrid.',
      html: '<p>This is a <b>test email</b> sent using SendGrid.</p>',
    }

    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response[0].statusCode);
    console.log('Message ID:', response[0].headers['x-message-id']);
  } catch (error) {
    console.error('Error sending email:', error);
    // if (error.response) {
    //   console.error(error.response.body);
    // }
  }
}