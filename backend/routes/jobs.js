const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const { sendJobEmails } = require("../utils/email");

// Create a new job posting
router.post("/create-job", async (req, res) => {
  const { title, description, experienceLevel, candidatesEmails, endDate } = req.body;
  const companyId = req.company.id; // Assuming authentication middleware provides this

  try {
    const job = new Job({
      title,
      description,
      experienceLevel,
      candidatesEmails,
      postedBy: companyId,
      endDate,
    });

    await job.save();

    // Send emails to the candidate
    sendJobEmails(job, candidatesEmails);

    res.status(201).json({ msg: "Job created and emails sent successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
