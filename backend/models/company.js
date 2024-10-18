const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  employeeSize: { type: Number, required: true },
  password: { type: String, required: true },
  emailOtp: { type: String },
  mobileOtp: { type: String },
  isEmailVerified: { type: Boolean, default: false },
  isMobileVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model("Company", CompanySchema);
