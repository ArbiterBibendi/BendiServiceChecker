const nodemailer = require('nodemailer');
require('dotenv').config();
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.G_APP_USERNAME,
    pass: process.env.G_APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false
  }
});

const send = async (service, info = "") => {
  try {
    const res = await transport.sendMail({
      from: process.env.G_APP_USERNAME,
      to: process.env.EMAIL,
      subject: `Service ${service} is DOWN`,
      text: info
    })
  } catch (e) {
    console.error(`Error sending email: ${e}`);
  }
}
module.exports.send = send;