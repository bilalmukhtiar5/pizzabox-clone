const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

const router = express.Router();

// 🟢 Add to Cart
router.post("/add", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({ user: userId, products: [] });
  }

  const itemIndex = cart.products.findIndex(
    (i) => i.product.toString() === productId
  );

  if (itemIndex > -1) {
    // Update quantity
    cart.products[itemIndex].quantity += quantity;
  } else {
    cart.products.push({ product: productId, quantity });
  }

  await cart.save();
  res.json(cart);
});

// 🟢 Get Cart
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ user: req.params.userId }).populate(
    "products.product"
  );
  res.json(cart || { products: [] });
});

// 🟢 Remove Item
router.delete("/:userId/:productId", async (req, res) => {
  const { userId, productId } = req.params;
  const cart = await Cart.findOne({ user: userId });

  if (!cart) return res.status(404).json({ message: "Cart not found" });

  cart.products = cart.products.filter(
    (i) => i.product.toString() !== productId
  );

  await cart.save();
  res.json(cart);
});

module.exports = router;

