// Requiring in Express
const router = require("express").Router();
const userRoutes = require("./users");
const recipeRoutes = require("./recipes");
const reviewRoutes = require("./reviews");
const saveRoutes = require("./saves");

// Diverting traffic accordingly
router.use("/users", userRoutes);
router.use("/recipes", recipeRoutes);
router.use("/reviews", reviewRoutes);
router.use("/saves", saveRoutes);
router.use((req, res) => res.send("Invalid Route"));

// Exporting
module.exports = router;