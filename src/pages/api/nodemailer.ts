import { NextApiRequest, NextApiResponse } from "next/types";

const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    email,
    phone,
    firstname,
    lastname,
    location,
    service,
    message,
    captchaToken,
  } = req.body;

  // Verify the reCAPTCHA token
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
  const response = await fetch(verifyUrl, { method: "POST" });
  const data = await response.json();
  if (!data.success) {
    return res.status(400).json({ message: "Invalid reCAPTCHA token" });
  }

  const composedEmail = {
    from: email,
    to: `${process.env.EMAIL_TO}`,
    subject: "Bericht van het contactformulier van de website",
    html: `<h2>Bericht van het contactformulier van de website</h2>
    <ul>
      <li><strong>Voornaam:</strong> ${firstname}</li>
      <li><strong>achternaam:</strong> ${lastname}</li>
      <li><strong>Telefoon:</strong> ${phone}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Locatie:</strong> ${location}</li>      
      <li><strong>Soort therapie:</strong> ${service}</li>
    </ul>
    <p>${message}</p>`,
  };

  const emailAuth = {
    user: `${process.env.SMTP_EMAIL}`,
    pass: `${process.env.SMTP_PASS}`,
  };
  let transporter = process.env.SMTP_EMAIL?.includes("gmail")
    ? nodemailer.createTransport({
        service: "gmail",
        auth: emailAuth,
      })
    : nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: emailAuth,
        tls: {
          rejectUnauthorized: false,
        },
      },);

  if (req.method === "POST") {
    transporter.sendMail(composedEmail, (err: any, info: any) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`,
        });
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`,
        });
      }
    });
  }
}
