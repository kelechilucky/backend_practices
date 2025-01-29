const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    match: [/^[0-9]{10,15}$/, "phone number must be 10 to 15 digits"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/@.*\.com$/, "email must be valid"],
  },
});

// Encrypt the password before save

UserSchema.pre("save", async function (next) {
  // Encrypt only if password is modified
  if (!this.isModified("password")) return next();

  // Encrypt the password

  this.password = await bcrypt.hash(this.password, 10);
  next();
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
