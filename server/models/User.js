// Requiring in mongoose and bcrypt
const {Schema, model} = require('mongoose');
const bcrypt = require("bcrypt");

// User model template
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 50,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    createdRecipes: [{
      type: Schema.Types.ObjectId,
      ref: "recipe",
    }],
    savedRecipes: [{
      type: Schema.Types.ObjectId,
      ref: "recipe",
    }],
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: "review",
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