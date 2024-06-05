const mongoose = require('mongoose');


const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    username: {
      type: String,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
    },
    savedRecipe: {
      type: String,
    },
    reviews: {
      type: String,
      required: true,
      max_length: 50,
    },
    createdRecipes: {
      type: String,
      required: true,
      max_length: 50,
    },
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

const User = new mongoose.model("user", userSchema);
module.exports = User;