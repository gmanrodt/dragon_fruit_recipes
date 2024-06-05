// Requiring in mongoose and bcrypt
const {Schema, model} = require('mongoose');
const bcrypt = require("bcrypt");

// User model template
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      min_length: 8,
    },
    savedRecipes: [{
      type: Schema.Types.ObjectId,
      ref: "saved",
    }],
    review: [{
      type: Schema.Types.ObjectId,
      ref: "review",
    }],
    createdRecipes: [{
      type: Schema.Types.ObjectId,
      ref: "recipe",
    }],
  },
  {
    id: false,
    versionKey: false,
  },
);

// Hashing of password
userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10);
  next()
})

// Creation of model from schema
const User = new model("user", userSchema);

// Exporting model
module.exports = User;