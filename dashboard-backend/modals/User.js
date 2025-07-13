const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  order: { type: Number, required: true },
  revenue: { type: Number, required: true }
});

module.exports = mongoose.model("User", userSchema);
