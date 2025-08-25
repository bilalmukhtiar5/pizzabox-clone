const Category = require("../models/Category");

// Add Category
exports.store = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.json({status:200, success: true, message: "Category added successfully", category});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Categories
exports.index = async (req, res) => {
  try {
    const categories = await Category.find(req.body);
    return res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Category by ID
exports.get = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ Update Category
exports.update = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ✅ Delete Category
exports.destroy = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
