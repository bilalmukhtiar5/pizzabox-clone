const express = require('express');
const cors = require("cors");
const { connectDb } = require("./database/db");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js"); // make sure this file exists
const authRoutes = require("./routes/auth.js");

const app = express();   // 👈 yahan banana hi zaroori hai
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDb();

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// Routes
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
