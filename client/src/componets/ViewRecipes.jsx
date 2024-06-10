import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function ViewRecipes() {
  const [recipe, setRecipe] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch("/api/recipes")
      .then(response => response.json())
      .then(data => {
        setRecipe(data)
      })
      .catch(error => {
        setErrorMessage("Failed to load recipes");
        console.error('Error:', error);
      });
  }, []);

  async function handleSavedRecipe(event) {
    event.preventDefault()
    try {
      const response = await fetch("/api/users", {
        method: 'POST',
        body: JSON.stringify({
          //this is where i need to put the posted info but im not sure what this is 
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()
      if (result.status === "success") {
      } else {
        throw new Error()
      }
      clearForms()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bodyWidth">
      {recipe.length > 0 ? (
        recipe.map((rec, i) => (
          <NavLink to={`/recipe/${rec._id}`} key={i}>
            <div className="allRecipeCard">
              <h2>{rec.title}</h2>
              <h3>{rec.category}</h3>
              <img src={rec.picture} alt="random recipe" className="recipeImageReSize" />
              <button onClick={handleSavedRecipe}>Save recipe</button>
            </div>
            
          </NavLink>
        ))
      ) : (
        <p>Loading...</p>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}