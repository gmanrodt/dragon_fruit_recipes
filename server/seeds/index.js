const connection = require("../config/connection");
const Recipe = require("../models/Recipe");
const recipeData = require("./recipes.json");

connection.once('open', async() => {

  const recipesExists = await connection.db.listCollections({ name: "recipes" }).toArray()
  if( recipesExists.length ){
    await connection.db.dropCollection("recipes")
  }
  
  const reviewsExists = await connection.db.listCollections({ name: "reviews" }).toArray()
  if( reviewsExists.length ){
    await connection.db.dropCollection("reviews")
  }

  try {
    await Recipe.insertMany(recipeData)
    console.log("Recipe seeding successful")
  } catch(err){
    console.log("Recipe seeding failed: " + err.message)
  }

  process.exit(0)

})