import sgMail from '@sendgrid/mail';
import { UserModel } from './auth/type';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function sendTestEmail(user: UserModel) {
  const msg = {
    to: user.email,
    from: process.env.MAIL_FROM as string,
    subject: 'Test Email from SendGrid',
    text: 'This is a test email sent using SendGrid.',
    html: '<p>This is a <b>test email</b> sent using SendGrid.</p>',
  }

  send(msg);
}

export async function resetEmail(email: string, token: string) {
  const msg = {
    to: email,
    from: process.env.MAIL_FROM as string,
    subject: 'Reset Password',
    text: 'This is a test email to reset password.',
    html: `<p>Click this <a href='${process.env.FRONTEND_API}/change-password?${token}'>link</a> to reset password.</p>`,
  }

  send(msg);
}

export async function send(msg: any) {
  try {
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