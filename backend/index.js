const express = require('express')
const cors = require("cors");
const connectDB = require("./database/db");
const categoryRoutes = require("./routes/categoryRoutes.js");
const productRoutes = require("./routes/productRoutes.js"); // make sure this file exists
const app = express();   // <-- MISSING LINE
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
