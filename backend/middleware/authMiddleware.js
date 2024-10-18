const jwt = require("jsonwebtoken");
const Company = require("../models/company"); // Adjust the path as necessary

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use your secret key here
    const company = await Company.findById(decoded.id); // Make sure you're decoding the correct property
    if (!company) {
      return res.status(401).json({ msg: "Token is not valid" });
    }

    req.company = company; // Attach the company object to the request
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = authMiddleware;
