import { NextApiRequest, NextApiResponse } from "next/types";

const nodemailer = require("nodemailer");

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const message = {
    from: req.body.email,
    to: `${process.env.NEXT_PUBLIC_EMAIL_TO}`,
    subject: "Bericht van het contactformulier van de website",
    html: `<h2>Bericht van het contactformulier van de website</h2>
    <ul>
      <li><strong>Voornaam:</strong> ${req.body.firstname}</li>
      <li><strong>achternaam:</strong> ${req.body.lastname}</li>
      <li><strong>Telefoon:</strong> ${req.body.phone}</li>
      <li><strong>Email:</strong> ${req.body.email}</li>
      <li><strong>Locatie:</strong> ${req.body.location}</li>      
      <li><strong>Soort therapie:</strong> ${req.body.service}</li>
    </ul>
    <p>${req.body.message}</p>`,
  };

  const emailAuth = {
    user: `${process.env.NEXT_PUBLIC_SMTP_EMAIL}`,
    pass: `${process.env.NEXT_PUBLIC_SMTP_PASS}`,
  };
  let transporter = process.env.NEXT_PUBLIC_SMTP_EMAIL?.includes("gmail")
    ? nodemailer.createTransport({
        service: "gmail",
        auth: emailAuth,
      })
    : nodemailer.createTransport({
        host: process.env.NEXT_PUBLIC_SMTP_HOST,
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: emailAuth,
      });

  if (req.method === "POST") {
    transporter.sendMail(message, (err: any, info: any) => {
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
