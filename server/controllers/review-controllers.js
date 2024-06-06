// Requring in models
const Review = require("../models/Review");
const Recipe = require("../models/Recipe");

// Exporting
module.exports = {
  // Get all reviews
  async getReviews(req, res) {
    try {
      const review = await Review.find();
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
      // if(req.body.createdId && req.body.savedId) {
      //   const review1 = await Review.create(req.body);
      //   const review2 = await Review.create(req.body);
      //   const created = await CreatedRecipe.findOneAndUpdate(
      //     {_id: req.body.createdId},
      //     {$addToSet: {reviews: review1._id}},
      //     {runValidators: true, new: true}
      //   );
      //   const saved = await SavedRecipe.findOneAndUpdate(
      //     {_id: req.body.savedId},
      //     {$addToSet: {reviews: review2._id}},
      //     {runValidators: true, new: true}
      //   );
      //   if(!created || !saved) {
      //     return res.status(404).json({msg: 'No recipe with that ID'});
      //   };
      //   res.status(200).json({review1, review2});
      // } else if(req.body.createdId && !req.body.savedId) {
      //   const review = await Review.create(req.body);
      //   const created = await CreatedRecipe.findOneAndUpdate(
      //     {_id: req.body.createdId},
      //     {$addToSet: {reviews: review._id}},
      //     {runValidators: true, new: true}
      //   );
      //   if(!created) {
      //     return res.status(404).json({msg: 'No recipe with that ID'});
      //   };
      //   res.status(200).json(review);
      // } else if(!req.body.createdId && req.body.savedId) {
      //   const review = await Review.create(req.body);
      //   const saved = await SavedRecipe.findOneAndUpdate(
      //     {_id: req.body.savedId},
      //     {$addToSet: {reviews: review._id}},
      //     {runValidators: true, new: true}
      //   );
      //   if(!saved) {
      //     return res.status(404).json({msg: 'No recipe with that ID'});
      //   };
      //   res.status(200).json(review);
      // }
      const review = await Review.create(req.body);
      const recipe = await Recipe.findOneAndUpdate(
        {_id: req.body.recipeId},
        {$addToSet: {reviews: review._id}},
        {runValidators: true, new: true}
      );
      if(!recipe) {
        return res.status(404).json({msg: 'No recipe with that ID'});
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
      res.status(200).json({msg: "review successfully deleted"})
    } catch(err) {
      res.status(500).json({msg: "Delete review: " + err.message});
    };
  }
};