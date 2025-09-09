const express = require("express");
const router = express.Router();
const controller = require("../controllers/productController");
const multer = require("multer");
const path = require("path");


//configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // save in uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
router.post("/", upload.single("image"), controller.store);

// ✅ Get All Products
router.get("/", controller.index);

// ✅ Get Products by Category
router.get("/category/:categoryId", controller.getProductsByCategory);

// ✅ Get Product by ID
router.get("/:id", controller.get);

// ✅ Update Product
router.put("/:id", controller.update);

// ✅ Delete Product
router.delete("/:id", controller.destroy);

module.exports = router;