const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
        match:[/^\d{10,15$}/, "phone number must be 10 to 15 digits"],
    },
    phone:{
        type:String,
        required:true,
        match:[/^\S{10,15$}/, "phone number must be 10 to 15 digits"],
    }
})