// Requiring in express and controllers
const router = require("../../../../../../inclass/mini-projects/dizzy-store/server/routes/api/products");
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

// Login route
router
  .route("/login")
  .post(loginUser);

// Verify route
router
  .route("/verify")
  .post(verifyUser);

// Single Route
router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

// Exporting
module.exports = router;
