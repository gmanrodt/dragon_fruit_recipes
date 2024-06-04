// Requiring in express and controllers
const router = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  verifyUser
} = require("../../controllers/user-controllers");

// All route
router
  .route("/")
  .get(getUsers)
  .post(createUser);

// Single Route
router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// Login route
router
  .route("/login")
  .post(loginUser);

// Verify route
router
  .route("/verify")
  .post(verifyUser);

// Invalid route
router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;
