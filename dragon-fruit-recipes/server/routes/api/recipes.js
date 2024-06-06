// Requiring in express and controllers
const router = require("express").Router();
const {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require("../../controllers/recipe-controllers");

// All route
router
  .route("/")
  .get(getRecipes)
  .post(createRecipe);

// Single route
router
  .route("/:recipeId")
  .get(getRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

// Invalid route
router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;