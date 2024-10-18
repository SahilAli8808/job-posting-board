const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Import JWT
const Company = require("../models/company");
const { sendEmailOtp, sendMobileOtp } = require("../utils/otpUtils");

// Register new company
router.post("/register", async (req, res) => {
  const { name, phoneNumber, companyName, email, employeeSize, password } = req.body;

  try {
    // Check if the email already exists
    let company = await Company.findOne({ email });
    if (company) return res.status(400).json({ msg: "Email already registered" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the company instance
    company = new Company({
      name,
      phoneNumber,
      companyName,
      email,
      employeeSize,
      password: hashedPassword,
      emailOtp: Math.floor(100000 + Math.random() * 900000).toString(),
      mobileOtp: Math.floor(100000 + Math.random() * 900000).toString(),
    });

    await company.save();

    // Send OTPs
    sendEmailOtp(company.email, company.emailOtp);
    sendMobileOtp(company.phoneNumber, company.mobileOtp);

    res.status(200).json({ msg: "Company registered. OTPs sent to email and phone." });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Verify Email OTP
router.post("/verify-email-otp", async (req, res) => {
  const { email, emailOtp } = req.body;

  try {
    const company = await Company.findOne({ email });
    if (!company || company.emailOtp !== emailOtp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    company.isEmailVerified = true;
    await company.save();
    res.json({ msg: "Email verified successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Verify Mobile OTP
router.post("/verify-mobile-otp", async (req, res) => {
  const { phoneNumber, mobileOtp } = req.body;

  try {
    const company = await Company.findOne({ phoneNumber });
    if (!company || company.mobileOtp !== mobileOtp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    company.isMobileVerified = true;
    await company.save();
    res.json({ msg: "Mobile verified successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Login Company
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the company exists
    const company = await Company.findOne({ email });
    if (!company) return res.status(400).json({ msg: "Invalid credentials" });

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, company.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Check if email is verified
    if (!company.isEmailVerified) {
      return res.status(400).json({ msg: "Please verify your email first" });
    }

    // Create and assign a token
    const token = jwt.sign({ id: company._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
