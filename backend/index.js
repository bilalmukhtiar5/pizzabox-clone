const express = require('express')
const app = express()
const port = 5000
const connectDB = require("./database/db");
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";





app.use(express.json());// Middleware to parse JSON bodies
// Connect to the database
connectDB();
app.use(cors());
// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})