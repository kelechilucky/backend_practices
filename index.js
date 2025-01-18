// Configiure dotenv
require("dotenv").config();

// Bring in installed packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// initialize express app
const app = express();

// configure middleware

app.use(cors());

// ensure express can read json files

app.use(express.json());

// connect MongoDG
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("connected to MongoDB");
})
.catch((error)=>{
    console.log("Mongo DB error:", error);
});

// start nodejs server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})