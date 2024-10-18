const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  candidatesEmails: { type: [String], required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model("Job", JobSchema);
