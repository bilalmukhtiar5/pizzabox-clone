const Product = require("../models/Product");

// Create Product
exports.store = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.json({
      status: 200,
      success: true,
      message: "Product created successfully",
      product
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Products
exports.index = async (req, res) => {
  try {
    const products = await Product.find().populate("category"); 
    // Assuming Product model has a field: category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
    res.json({ status: 200, success: true, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Products by Category ID
exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId });
    res.json({ status: 200, success: true, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
