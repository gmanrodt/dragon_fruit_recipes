// Requiring in express and controllers
const {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview
} = require("../../controllers/review-controllers");
const router = require("./users");

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
  .delete(deleteReview)

// Exporting
module.exports = router;