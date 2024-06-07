// Requiring in connection, model, and database
const connection = require("../config/connections");
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

  // Iterating over each recipe
  const recipesModellized = [];

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
    const recipeModellized = {
      title: recipe.title,
      category: recipe.category,
      instructions: recipe.instructions,
      ingredients: ingredients,
      measurements: measurements,
      picture: recipe.picture
    };
    recipesModellized.push(recipeModellized);
  });
  
  // Creating new collection
  try {
    await Recipe.insertMany(recipesModellized)
    console.log("Recipe seeding successful")
  } catch(err){
    console.log("Recipe seeding failed: " + err.message)
  }

  process.exit(0)

})