import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserNav from '../componets/UserPageNav'
import axios from "axios";
import '../style/viewrecipes.css'

export default function ViewCreatedRecipe() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCreatedRecipes = async () => {
      try {
        const response = await axios.get('api/recipe');
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.log('error fetching recipes', error);
        setLoading(false);
      }
    };
  
    fetchCreatedRecipes();
  }, []);
  
  return (
    <>
      <UserNav />
      <h3>Created Recipes</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe._id}>{recipe.title}</li>
          ))}
        </ul>
      )}
      <div className="recipe-card-container">
        {/* Additional recipe card components */}
      </div>
    </>
  );
}