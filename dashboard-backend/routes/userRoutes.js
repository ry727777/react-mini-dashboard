const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Add a new user
router.post("/", async (req, res) => {
  const { name, order, revenue } = req.body;
  const newUser = new User({ name, order, revenue });
  await newUser.save();
  res.status(201).json(newUser);
});

module.exports = router;
