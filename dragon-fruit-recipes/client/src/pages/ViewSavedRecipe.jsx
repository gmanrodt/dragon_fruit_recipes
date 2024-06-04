import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';
import axios from "axios";

export default function ViewSavedRecipe() {

    const [recipes, setRecipes] = useState;
    useEffect(() => {
        const fetchSavedRecipes = async () => {
            try {
                const response = await axios.get('this is where our database link will go'); //fixed this 
                setRecipes(response.data)
            }
            catch (error) {
                console.log('error fetching recipes', error)
            }
        };
        fetchSavedRecipes();
    }, [])

    return (
        <>
            <h3>Saved Recipes</h3>
            <ul>
                {/* this will need to be redone also once we know how the back end works */}
                {recipes.map(recipes => (
                    <li key={recipes._id}>{recipes.title}</li>
                ))}
            </ul>
        </>
    )

}