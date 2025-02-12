const mongoose = require("mongoose");

// MongoDB Connection
async function connectDB(url) {
  return mongoose.connect(url);
}

module.exports = connectDB;