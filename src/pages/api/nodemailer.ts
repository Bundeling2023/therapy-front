import { NextApiRequest, NextApiResponse } from "next/types";

export default function nodemailer (
  req: NextApiRequest,
  res: NextApiResponse) {

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({});

  console.log(req.body);
  res.send("success");
}