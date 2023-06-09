import { NextApiRequest, NextApiResponse } from "next/types";

const nodemailer = require('nodemailer');

export default function handler( req: NextApiRequest, res: NextApiResponse ) {

  const message = {
    from: req.body.email,
    to: `${process.env.NEXT_PUBLIC_EMAIL_TO}`,
    subject: 'Message from Bundeling website',
    html: `<h2>Message from Bundeling website:</h2>
    <p><strong>Voornaam:</strong> ${req.body.voornaam}</p>
    <p><strong>achternaam:</strong> ${req.body.achternaam}</p>
    <p><strong>Telefoon:</strong> ${req.body.telefoon}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
    <p><strong>Locatie:</strong> ${req.body.locatie}</p>`,
  };

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.NEXT_PUBLIC_SMTP_EMAIL}`,
      pass: `${process.env.NEXT_PUBLIC_SMTP_PASS}`,
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err: any, info: any) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}