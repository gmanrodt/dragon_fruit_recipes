import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function ViewCreatedRecipe() {

    const [recipes, setRecipes] = useState;
    useEffect(() => {
        const fetchCreatedRecipes = async () => {
            try {
                const response = await axios.get('this is where our database link will go'); //fixed this 
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
            <h3>Created Recipes</h3>
            <ul>
            {/* this will need to be redone also once we know how the back end works */}
                {recipes.map(recipes => (
                    <li key={recipes._id}>{recipes.title}</li>
                ))}
            </ul>
        </>
    )

}