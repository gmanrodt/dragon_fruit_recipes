const Recipe = require("../models/Recipe");
const recipeData = require("./recipes.json");

const recipesIngredients = [];
const recipesMeasurements = [];

recipeData.forEach((recipe) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`;
    const ingredient = recipe[ingredientKey];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  recipesIngredients.push(ingredients);
});


recipeData.forEach((recipe) => {
  const measurements = [];
  for (let i = 1; i <= 20; i++) {
    const measurementKey = `strMeasure${i}`;
    const measurement = recipe[measurementKey];
    if (measurement) {
      measurements.push(measurement);
    }
  }
  recipesMeasurements.push(measurements);
});
      
      
console.log(recipesMeasurements[0]);
console.log(recipesIngredients[0]);