import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';
import UserNav from '../componets/UserPageNav'
import axios from "axios";
import '../style/viewsaved.css'
import RecipeCard from "../componets/RecipeCard";


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
        
        <div className="recipe-card-container">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </>
    )

}