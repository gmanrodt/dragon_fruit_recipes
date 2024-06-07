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

  // Creating new collection
  try {
    await Recipe.insertMany(recipeData)
    console.log("Recipe seeding successful")
  } catch(err){
    console.log("Recipe seeding failed: " + err.message)
  }

  process.exit(0)

})