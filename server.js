const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // Fix the require statement for 'path'

// dotenv configuration
dotenv.config();

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, './client/build')));

// Define your API routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

// Serve the React app for any other routes
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Port
const PORT = process.env.PORT || 8080;

// Listen
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
