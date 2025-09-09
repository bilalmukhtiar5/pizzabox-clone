const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  image: {
    type: String,
  }
});

module.exports = mongoose.model("Product", productSchema);
