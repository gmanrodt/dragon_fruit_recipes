import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';
import UserNav from '../componets/UserPageNav'
import axios from "axios";
import '../style/viewsaved.css'


export default function ViewSavedRecipe() {

    const [recipes, setRecipes] = useState([]); // Initialize recipes as an empty array

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            try {
                const response = await axios.get('this is where our database link will go');
                setRecipes(response.data);
            } catch (error) {
                console.log('error fetching recipes', error);
            }
        };
        fetchSavedRecipes();
    }, []);
    

    return (
        <>
        <UserNav/>
        <h3>Saved Recipes</h3>
        <ul>
            {recipes.map(recipe => (
                <li key={recipe._id}>{recipe.title}</li>
            ))}
        </ul>
              <div className='recipecards'>
          <div className='recipe1'>
           <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
           <p>Title</p>
         </div>
         <div className='recipe2'>
           <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
           <p>Title</p>
        </div>
        <div className='recipe3'>
           <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
           <p>Title</p>
        </div>
        </div>
       
  <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
  <a className="next" onClick="plusSlides(1)">&#10095;</a>
            <div className="container-carousel">
                <input type="radio" name="position" checked />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <div id="carousel">
                    <div className="item">
                        <div className='recipe-card'>
                            <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                            <h2>Sample Food</h2>
                            <p>Description of food or something.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className='recipe-card'>
                            <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                            <h2>Sample Food</h2>
                            <p>Description of food or something.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className='recipe-card'>
                            <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                            <h2>Sample Food</h2>
                            <p>Description of food or something.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className='recipe-card'>
                            <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                            <h2>Sample Food</h2>
                            <p>Description of food or something.</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className='recipe-card'>
                        <img src="/assets/dragonfruit.png" alt="sample recipe" className="recipeImg"/>
                        <h2>Sample Food</h2>
                        <p>Description of food or something.</p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )

}