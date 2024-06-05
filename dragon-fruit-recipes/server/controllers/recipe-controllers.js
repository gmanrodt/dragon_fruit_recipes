// Requring in model
const Recipe = require("../models/CreatedRecipe");

// Exporting
module.exports = {
  // Get all recipes
  async getRecipes(req, res) {
    try {
      const recipe = await Recipe.find();
      res.status(200).json(recipe);
    } catch(err) {
      res.status(500).json({msg: "Get recipes: " + err.message});
    };
  },

  // Get single recipe
  async getRecipe(req, res) {
    try {
      const recipe = await Recipe.findOne({_id: req.params.recipeId});
      if(!recipe) {
        res.status(404).json({msg: "No recipe found with that ID"});
      };
      res.status(200).json(recipe);
    } catch(err) {
      res.status(500).json({msg: "Get recipe: " + err.message});
    };
  },

  // Create recipe
  async createRecipe(req, res) {
    try {
      const recipe = await Recipe.create(req.body);
      res.status(200).json(recipe);
    } catch(err) {
      res.status(500).json({msg: "Create recipe: " + err.message});
    };
  },

  // Update recipe
  async updateRecipe(req, res) {
    try {
      const recipe = await Recipe.findOneAndUpdate(
        {_id: req.params.recipeId},
        {$set: req.body},
        {runValidators: true, new: true}
      );
      if(!recipe) {
        res.status(404).json({msg: "No recipe found with that ID"});
      };
      res.status(200).json(recipe);
    } catch(err) {
      res.status(500).json({msg: "Update recipe: " + err.message});
    };
  },

  // Delete recipe
  async deleteRecipe(req, res) {
    try {
      const recipe = await Recipe.findOneAndDelete({_id: req.params.recipeId});
      if(!recipe) {
        res.status(404).json({msg: "No recipe found with that ID"});
      };
      res.status(200).json({msg: "recipe successfully deleted"})
    } catch(err) {
      res.status(500).json({msg: "Delete recipe: " + err.message});
    };
  }
};