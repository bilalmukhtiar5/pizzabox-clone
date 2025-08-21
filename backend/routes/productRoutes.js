import express from "express";
import { createProduct, getProducts, getProductsByCategory } from "../controllers/productController.js";

const router = express.Router();

router.post("/", createProduct);              // Add Product
router.get("/", getProducts);                 // Get All Products
router.get("/category/:categoryId", getProductsByCategory); // Get Products by Category

export default router;
