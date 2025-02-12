const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email must be unique
  },
  job_title: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", userSchema);
module.exports =  User ;