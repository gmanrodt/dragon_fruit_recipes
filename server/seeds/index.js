// Requiring in connection, model, and database
const connection = require("../config/connection");
const Recipe = require("../models/Recipe");
const recipeData = require("./recipes.json");

// Starting new connection
connection.once('open', async() => {
  // Clearing collections
  const recipesExists = await connection.db.listCollections({ name: "recipes" }).toArray();
  if( recipesExists.length ){
    await connection.db.dropCollection("recipes");
  }
  const reviewsExists = await connection.db.listCollections({ name: "reviews" }).toArray();
  if( reviewsExists.length ){
    await connection.db.dropCollection("reviews");
  }
  const usersExists = await connection.db.listCollections({ name: "users" }).toArray();
  if( usersExists.length ){
    await connection.db.dropCollection("users");
  }

  const recipesIngredients = [];
  const recipesMeasurements = [];
  
  recipeData.forEach((recipe) => {
    const ingredients = [];
    const measurements = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measurementKey = `strMeasure${i}`;
      const ingredient = recipe[ingredientKey];
      const measurement = recipe[measurementKey];
      if (ingredient && measurement) {
        ingredients.push(ingredient);
        measurements.push(measurement);
      }
    }
    recipesIngredients.push(ingredients);
    recipesMeasurements.push(measurements);
  });
  
  // Creating new collection
  try {
    await Recipe.insertMany(recipeData)
    console.log("Recipe seeding successful")
  } catch(err){
    console.log("Recipe seeding failed: " + err.message)
  }

  process.exit(0)

})