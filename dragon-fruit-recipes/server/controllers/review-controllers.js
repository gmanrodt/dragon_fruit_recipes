// Requring in model
const Review = require("../models/Review-model");

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
        res.status(404).json({msg: "No review found with that ID"});
      };
      res.status(200).json(review);
    } catch(err) {
      res.status(500).json({msg: "Get reviews: " + err.message});
    };
  },

  // Create review
  async createReview(req, res) {
    try {
      const review = await Review.create(req.body);
      const token = await createToken(review);
      res
        .status(200)
        .cookie("auth-cookie", token, {
          maxAge: 86400 * 1000, // 24 hour token
          httpOnly: false,
          secure: process.env.NODE_ENV === "production"
        })
        .json(review);
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
        res.status(404).json({msg: "No review found with that ID"});
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
        res.status(404).json({msg: "No review found with that ID"});
      };
      res.status(200).json({msg: "review successfully deleted"})
    } catch(err) {
      res.status(500).json({msg: "Delete review: " + err.message});
    };
  }
};