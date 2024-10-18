const nodemailer = require("nodemailer");

// Send OTP via email
const sendEmailOtp = (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your Email OTP",
    text: `Your OTP for email verification is ${otp}.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// Simulated mobile OTP send (you would use an SMS API here)
const sendMobileOtp = (phoneNumber, otp) => {
  console.log(`Sending OTP ${otp} to mobile number ${phoneNumber}`);
};

module.exports = { sendEmailOtp, sendMobileOtp };
