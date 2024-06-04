// Requiring in express and controllers
const router = require("express").Router();
const {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview
} = require("../../controllers/review-controllers");

// All route
router
  .route("/")
  .get(getReviews)
  .post(createReview);

// Single route
router
  .route("/reviewId")
  .get(getReview)
  .put(updateReview)
  .delete(deleteReview);

// Invalid route
router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;