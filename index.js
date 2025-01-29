// configure env
require("dotenv").config();

// bring in installed npm
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AuthRoutes = require("./routes/auth");

// init express app
const app = express();

//configure middlewares
app.use(cors());
app.use(express.json());

// this is where your entry point file which is your index.js maps the routes/endpoint

app.use("/api/auth", AuthRoutes)
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

