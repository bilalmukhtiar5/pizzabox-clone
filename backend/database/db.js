// db.js
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://billuedwardian08:adminbilal@cluster0.o9plrh.mongodb.net/");
    console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

module.exports = connectDB;
