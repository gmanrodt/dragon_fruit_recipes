// Requiring in Express
const router = require("express").Router();
const recipeRoutes = require("./recipes");
const userRoutes = require("./users");
const reviewRoutes = require("./reviews");

// Diverting traffic accordingly
router.use("/reviews", reviewRoutes);
router.use("/recipes", recipeRoutes);
router.use("/users", userRoutes);
router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;