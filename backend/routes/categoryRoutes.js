import express from "express";
import { createCategory, getCategories } from '../controllers/categoryController.js';

const router = express.Router();

router.post("/", createCategory);   // Add Category
router.get("/", getCategories);     // Get All Categories

export default router;
