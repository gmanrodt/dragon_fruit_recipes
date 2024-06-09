// Requiring in mongoose
const {Schema, model} = require('mongoose');

// Review model template
const ingredientSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		measurement: {
			type: String,
			required: true
		},
	},
	{
		id: false,
		versionKey: false
	},
);

// Creation of model from schema
const Ingredient = new model("ingredient", ingredientSchema);

// Exporting model
module.exports = Ingredient; 