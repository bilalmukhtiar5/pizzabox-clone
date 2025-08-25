const Product = require("../models/Product"); // ✅ Make sure model file is correct

// Add Product
exports.store = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.json({
      status: 200,
      success: true,
      message: "Product added successfully",
      product
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Products
exports.index = async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Product by ID
exports.get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Product
exports.update = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
// productController.js
exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId }).populate("category");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Delete Product
exports.destroy = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
