const express = require("express");
const router = express.Router();
const controller = require("../controllers/categoryController");

router.post("/", controller.store);        // Add Category
router.get("/", controller.index);         // Get All Categories
router.get("/:id", controller.get);        // Get Category by ID
router.put("/:id", controller.update);     // Update Category
router.delete("/:id", controller.destroy); // Delete Category

module.exports = router;

