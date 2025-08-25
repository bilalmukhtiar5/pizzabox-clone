const mongoose = require("mongoose");


const connectDb = async () => {
  try {
      await mongoose.connect("mongodb+srv://billuedwardian08:admin%40123@cluster0.5ccdp9h.mongodb.net/pizzaboxtest")
      console.log("Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error(err.message);
    
  }
}

module.exports = {connectDb};