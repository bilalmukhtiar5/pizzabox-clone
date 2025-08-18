const express = require('express')
const app = express()
const port = 3000
const connectDB = require("./database/db");




app.use(express.json());// Middleware to parse JSON bodies
// Connect to the database
connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})