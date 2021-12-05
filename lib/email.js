import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

export async function sendEmail(to, options) {
  return await new Promise((resolve, reject) => {
    transporter.sendMail(
      {
        ...options,
        bcc: process.env.EMAIL_USER,
        from: process.env.EMAIL_USER,
        to,
      },
      (err, info) => {
        if (err) {
          reject(err);
        } else {
          resolve({ messageId: info.messageId });
        }
      }
    );
  });
}
