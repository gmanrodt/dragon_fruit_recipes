// Requiring in express and controllers
const {
  getRecipe,
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require("../../controllers/recipe-controllers");
const router = require("./users");

// All route
router
  .route("/")
  .get(getRecipes)
  .post(createRecipe);

// Single route
router
  .route("/recipeId")
  .get(getRecipe)
  .put(updateRecipe)
  .delete(deleteRecipe);

// Exporting
module.exports = router;