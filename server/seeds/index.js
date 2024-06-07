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
    await Product.insertMany(dizzydata)
    console.log("Product seeding successful")
  } catch(err){
    console.log("Product seeding failed - " + err.message)
  }

  try {
    await User.insertMany(userdata)
    console.log("User seeding successful")
  } catch(err){
    console.log("User seeding failed - " + err.message)
  }

  process.exit(0)

})