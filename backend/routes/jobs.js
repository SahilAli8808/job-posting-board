const express = require("express");
const router = express.Router();
const Job = require("../models/job");
const { sendJobEmails } = require("../utils/email");
const authMiddleware = require("../middleware/authMiddleware"); // Adjust the path as necessary

// Apply authentication middleware
router.post("/create-job", authMiddleware, async (req, res) => {
  const { title, description, experienceLevel, candidatesEmails, endDate } = req.body;
  const companyId = req.company._id; // Use _id or id depending on your model

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
