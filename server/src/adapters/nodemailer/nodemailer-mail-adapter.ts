import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e9f442025e1602",
    pass: "8bd4422e2191f4"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData){
   await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Adriel Ryan <adrielryan.tj@hotmail.com>',
    subject,
    html: body,
  });
  };
}