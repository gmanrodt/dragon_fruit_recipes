const Recipe = require("../models/Recipe");
const recipeData = require("./recipes.json");

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

console.log(recipesModellized[0]);


