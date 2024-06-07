// Requiring in Express
const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");
const reviewRoutes = require("./reviews");

// Diverting traffic accordingly
router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/reviews", reviewRoutes);
// router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;