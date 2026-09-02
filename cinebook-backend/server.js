const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();


// MongoDB
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Authentication routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);


// Test route
app.get("/", (req, res) => {
  res.json({
    message: "CineBook Backend is Running 🚀"
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});