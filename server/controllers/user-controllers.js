// Requring in models, bcrypt, jwt, path, and dotenv
const User = require("../models/User");
const SavedRecipe = require("../models/SavedRecipe");
const CreatedRecipe = require("../models/CreatedRecipe");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require('path');
require("dotenv").config({path: path.join(__dirname, "../.env")})
console.log(process.env.TOKEN_ENCRYPT_KEY)

// Function to create a token
async function createToken(user) {
  const tokenData = {email: user.email};
  const token = await jwt.sign(tokenData, process.env.TOKEN_ENCRYPT_KEY);
  return token;
};

// Exporting
module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const user = await User.find()
        .populate({path: "savedRecipes"})
        .populate({path: "createdRecipes"})
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json({msg: "Get users: " + err.message});
    };
  },

  // Get single user
  async getUser(req, res) {
    try {
      const user = await User.findOne({_id: req.params.userId})
        .populate({path: "savedRecipes"})
        .populate({path: "createdRecipes"})
      if(!user) {
        return res.status(404).json({msg: "No user found with that ID"});
      };
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json({msg: "Get user: " + err.message});
    };
  },

  // Create user
  async createUser(req, res) {
    // console.log(req.body)
    // const user = await User.create(req.body);
    // res
    // .status(200).json(user);
    try {
      const user = await User.create(req.body);
      console.log(user)

      // const token = await createToken(user);
      res
        .status(200)
        .cookie("auth-cookie", token, {
          maxAge: 86400 * 1000, // 24 hour token
          httpOnly: false,
          secure: process.env.NODE_ENV === "production"
        })
        .json(user);
    } catch(err) {
      console.log(err)
      res.status(500).json({msg: "Create user: " + err.message});
    };
  },

  // Update user
  async updateUser(req, res) {
    try {
      let user = await User.findOneAndUpdate(
        {_id: req.params.userId},
        {$set: req.body},
        {runValidators: true, new: true}
      );
      if(!user) {
        return res.status(404).json({msg: "No user found with that ID"});
      };
      user = await user.save();
      res.status(200).json(user);
    } catch(err) {
      res.status(500).json({msg: "Update user: " + err.message});
    };
  },

  // Delete user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({_id: req.params.userId});
      if(!user) {
        return res.status(404).json({msg: "No user found with that ID"});
      };
      await SavedRecipe.deleteMany({_id: {$in: user.savedRecipes.reviews}});
      await SavedRecipe.deleteMany({_id: {$in: user.savedRecipes}});
      await CreatedRecipe.deleteMany({_id: {$in: user.createdRecipes.reviews}});
      await CreatedRecipe.deleteMany({_id: {$in: user.createdRecipes}});
      res.status(200).json({msg: "User successfully deleted"})
    } catch(err) {
      res.status(500).json({msg: "Delete user: " + err.message});
    };
  },

  // Login user
  async loginUser(req, res) {
    try {
      let user = await User.findOne({username: req.body.username});
      if(!(await bcrypt.compare(req.body.password, user.password))) throw new Error();
      const token = await createToken(user);
      // user = await user.save(); <------------- MAYBE
      res
        .status(200)
        .cookie("auth-cookie", token, {
          maxAge: 86400 * 1000, // 24 hour token
          httpOnly: false,
          secure: process.env.NODE_ENV === "production"
        })
        .json(user)
    } catch(err) {
      res.status(500).json({msg: "Login user: " + err.message});
    };
  },

  async verifyUser(req, res) {
    const cookie = req.cookies["auth-cookie"];
    if(!cookie) {
      return res.status(500).json({msg: "Could not authenticate user"});
    };
    const decryptedCookie = jwt.verify(cookie, process.env.TOKEN_ENCRYPT_KEY)
    const user = await findOne({email: decryptedCookie.email});
    if(!user) {
      return res.status(500).json({msg: "Could not authenticate user"});
    }
    res.status(200).json({msg: "Successfully verified"});
  }
};