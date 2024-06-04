// Requring in model
const User = require("../models/User-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to create a token
async function createToken(user) {
  const tokenData = {email: user.email};
  const token = await jwt.sign(tokenData);
  return token;
};

// Exporting
module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json(err.message);
    };
  },

  // Get single user
  async getUser(req, res) {
    try {
      const user = await User.findOne({_id: req.params.userId});
      if(!user) {
        res.status(404).json({msg: "No user found with that ID"});
      }
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json(err.message);
    };
  },

  // Create user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      const token = await createToken(user);
      res
        .status
    }
  }
}