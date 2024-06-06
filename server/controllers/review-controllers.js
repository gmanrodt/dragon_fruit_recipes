// Requring in models
const {User, Recipe, Review} = require("../models");

// Exporting
module.exports = {
  // Get all reviews
  async getAllReviews(req, res) {
    try {
      const review = await Review.find({})
      res.status(200).json(review);
    } catch(err) {
      res.status(500).json({msg: "Get all reviews: " + err.message});
    };
  },

  // Get all reviews for recipe
  async getReviews(req, res) {
    try {
      const review = await Recipe.findOne({_id: req.params.recipeId})
        .populate({path: "reviews"})
        .select("-_id reviews");
      if(!review) {
        return res.status(404).json({msg: "No review found with that ID"});
      };
      res.status(200).json(review);
    } catch(err) {
      res.status(500).json({msg: "Get reviews: " + err.message});
    };
  },

  // Get single review
  async getReview(req, res) {
    try {
      const review = await Review.findOne({_id: req.params.reviewId});
      if(!review) {
        return res.status(404).json({msg: "No review found with that ID"});
      };
      res.status(200).json(review);
    } catch(err) {
      res.status(500).json({msg: "Get review: " + err.message});
    };
  },

  // Create review
  async createReview(req, res) {
    try {
      const review = await Review.create(req.body);
      const recipe = await Recipe.findOneAndUpdate(
        {_id: req.params.recipeId},
        {$addToSet: {reviews: review._id}},
        {runValidators: true, new: true}
      );
      if(!recipe) {
        return res.status(404).json({msg: 'No recipe with that ID'});
      };
      const user = await User.findOneAndUpdate(
        {email: req.body.email},
        {$addToSet: {reviews: review._id}},
        {runValidators: true, new: true}
      );
      if(!user) {
        return res.status(404).json({msg: 'No user with that ID'});
      };
      res.status(200).json(review);
    } catch(err) {
      res.status(500).json({msg: "Create review: " + err.message});
    };
  },

  // Update review
  async updateReview(req, res) {
    try {
      const review = await Review.findOneAndUpdate(
        {_id: req.params.reviewId},
        {$set: req.body},
        {runValidators: true, new: true}
      );
      if(!review) {
        return res.status(404).json({msg: "No review found with that ID"});
      };
      res.status(200).json(review);
    } catch(err) {
      res.status(500).json({msg: "Update review: " + err.message});
    };
  },

  // Delete review
  async deleteReview(req, res) {
    try {
      const review = await Review.findOneAndDelete({_id: req.params.reviewId});
      if(!review) {
        return res.status(404).json({msg: "No review found with that ID"});
      };
      await User.findOneAndUpdate(
        { reviews: req.params.reviewId },
        { $pull: { reviews: req.params.reviewId } }
      );
      await Recipe.findOneAndUpdate(
        { reviews: req.params.reviewId },
        { $pull: { reviews: req.params.reviewId } }
      );
      res.status(200).json({msg: "review successfully deleted"})
    } catch(err) {
      res.status(500).json({msg: "Delete review: " + err.message});
    };
  }
};