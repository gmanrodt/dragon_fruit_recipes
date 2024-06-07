// Requiring in express and controllers
const router = require("express").Router();
const {
  getAllReviews
} = require("../../controllers/review-controllers");

// All reviews route
router
  .route("/")
  .get(getAllReviews);

// Invalid route
router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;