import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../style/home.css"
import RecipeCard from "../componets/RecipeCard";

//fixed
export default function HomePage() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/');
    }, []);


    return (
        <>
            {/* <div class="loader"></div> */}
            <div className='about'>
                <p> Welcome to DragonFruit Delights! This is a page for finding new recipes and sharing your own. Log in or sign up to contribute to our cooking community! </p>

          
            </div>
        
            <div className="recipe-card-container">
                <RecipeCard/>
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </>
    )

}
