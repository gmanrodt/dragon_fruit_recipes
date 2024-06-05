// Requiring in mongoose
const {Schema, model} = require('mongoose');

// Review model template
const reviewSchema = new Schema(
	{
		rating: {
			type: Number,
			min: 1,
			max: 5,
			required: true
		},
		comments: {
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
const Review = new model("review", reviewSchema);

// Exporting model
module.exports = Review; 