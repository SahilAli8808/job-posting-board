const nodemailer = require("nodemailer");

const sendJobEmails = (job, candidatesEmails) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  candidatesEmails.forEach((email) => {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Job Opportunity: ${job.title}`,
      text: `You have been invited to apply for a job at ${job.title}. Description: ${job.description}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};

module.exports = { sendJobEmails };
