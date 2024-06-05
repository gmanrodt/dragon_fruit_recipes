// Requring in mongoose
const mongoose = require('mongoose');

// Recipe model template
const recipeSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		category: {
			type: String,
			required: true,
			enum: ["Beef","Breakfast","Chicken","Dessert","Goat","Lamb","Miscellaneous","Pasta","Pork","Seafood","Side","Starter","Vegan", "Vegetarian"]
		},
		instructions: {
			type: String,
			required: true
		},
		ingredients: {
			type: String,
			required: true
		},
		measurment: {
			type: String,
			required: true
		},
		picture: {

		},
	},
	{
		id: false,
		versionKey: false
	}
);

// Creation of model from schema
const Recipe = new mongoose.model("recipe", recipeSchema);

// Exporting model
module.exports = Recipe;

