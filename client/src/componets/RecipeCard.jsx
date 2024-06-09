import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function RecipeCard() {
    const [recipe, setRecipe] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => response.json())
            .then(data => setRecipe(data.meals[0]))
            .catch(error => {
                setErrorMessage("Failed to fetch random recipe");
                console.error('Error:', error);
            });
    }, []);

    return (
        <div className="randomRecipeCard">
            {recipe ? (
                <NavLink to={`/recipe/${recipe.strMeal.replace(/ /g, '')}`}> 
                <h2>{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} alt="random recipe" className="recipeImageReSize"/>
                </NavLink>
            ) : (
                <p>Loading...</p>
            )}
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}