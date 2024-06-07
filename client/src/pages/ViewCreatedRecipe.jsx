import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import UserNav from '../componets/UserPageNav'
import axios from "axios";
import '../style/viewrecipes.css'

export default function ViewCreatedRecipe() {

  const [recipes, setRecipes] = useState;
  useEffect(() => {
    const fetchCreatedRecipes = async () => {
      try {
        const response = await axios.get('api/recipe'); //fixed this 
        setRecipes(response.data)
      }
      catch (error) {
        console.log('error fetching recipes', error)
      }
    };
    fetchCreatedRecipes();
  }, [])

  return (
    <>
      <UserNav />
      <h3>Created Recipes</h3>
      <ul>
                {recipes.map(recipes => (
                 <li key={recipes._id}>{recipes.title}</li>
           ))}
          </ul> */}
          <div className="recipe-card-container">
                <div className='recipe-card'>
                    <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                    <h2>Sample Food</h2>
                    <p>Description of food or something.</p>
                </div>
                <div className='recipe-card'>
                    <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                    <h2>Sample Food</h2>
                    <p>Description of food or something.</p>
                </div>
                <div className='recipe-card'>
                    <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                    <h2>Sample Food</h2>
                    <p>Description of food or something.</p>
                </div>
            </div>
            
        </>
    )


}