// configure env
require("dotenv").config();

// bring in installed npm
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// init express app
const app = express();

//configure middlewares
app.use(cors());
app.use(express.json());

// connect mongodb
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MONGODB");
  })
  .catch((error) => {
    console.log("MONGO_DB ERROR:", error);
  });

// start node js server
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running on port ${port}");
});

