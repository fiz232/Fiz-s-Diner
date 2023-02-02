const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const signup = mongoose.model("signup", signupSchema);
module.exports = signup;
