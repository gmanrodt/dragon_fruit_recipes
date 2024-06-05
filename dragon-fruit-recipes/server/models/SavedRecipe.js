// Requring in mongoose
const mongoose = require('mongoose');

// Saved recipe model template
const saveSchema = new mongoose.Schema(
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
			type: [String],
			required: true
		},
		measurements: {
			type: [String],
			required: true
		},
		picture: {
			data: Buffer,
      contentType: String
		},
	},
	{
		id: false,
		versionKey: false
	}
);

// Creation of model from schema
const Save = new mongoose.model("save", saveSchema);

// Exporting model
module.exports = Save;
