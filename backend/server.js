const express = require("express");
const connectDB = require("./config/db");
const app = express();
require("dotenv").config();
const cors = require('cors');

// Connect to databases
connectDB();
app.use(cors({
    origin: '*'  // This allows all origins
}));
// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/jobs", require("./routes/jobs"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
