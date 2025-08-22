const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");

// Add Product
router.post("/", controller.store);

// Get All Products
router.get("/", controller.index);

// Get Products by Category
router.get("/category/:categoryId", controller.getProductsByCategory);

module.exports = router;
