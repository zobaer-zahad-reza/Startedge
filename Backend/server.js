const express = require("express");
const cors = require("cors");
const { sequelize, connectDB } = require("./config/db");
const Contact = require("./models/Contact");
const Payment = require("./models/Payment");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// 1. Contact Form Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContact = await Contact.create({ name, email, subject, message });
    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Payment Route
app.post("/api/payment", async (req, res) => {
  try {
    const { name, email, mobile, amount, method, senderNumber, trxid, plan } =
      req.body;
    const newPayment = await Payment.create({
      name,
      email,
      mobile,
      amount,
      method,
      senderNumber,
      trxid,
      plan,
    });
    res.status(201).json({
      success: true,
      message: "Payment info submitted!",
      data: newPayment,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start Server & Sync DB
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  // sync({ force: false }) means it won't drop tables if they exist
  await sequelize.sync({ force: false });
  console.log(`🚀 Server running on port ${PORT}`);
});
