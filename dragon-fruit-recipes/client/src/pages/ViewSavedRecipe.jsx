import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';
import UserNav from '../componets/UserPageNav'
import axios from "axios";
import '../style/viewrecipes.css'


export default function ViewSavedRecipe() {

    // const [recipes, setRecipes] = useState;
    // useEffect(() => {
    //     const fetchSavedRecipes = async () => {
    //         try {
    //             const response = await axios.get('this is where our database link will go'); //fixed this 
    //             setRecipes(response.data)
    //         }
    //         catch (error) {
    //             console.log('error fetching recipes', error)
    //         }
    //     };
    //     fetchSavedRecipes();
    // }, [])

    return (
        <>
        <UserNav/>
            <h3>Saved Recipes</h3>
            {/* <ul>
                {this will need to be redone also once we know how the back end works }
                {recipes.map(recipes => (
                    <li key={recipes._id}>{recipes.title}</li>
                ))}
            </ul> */}
               <div class='recipecards'>
          <div class='recipe1'>
           <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
           <p>Title</p>
         </div>
         <div class='recipe2'>
           <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
           <p>Title</p>
        </div>
        <div class='recipe3'>
           <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
           <p>Title</p>
        </div>
        </div>
       
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </>
    )

}