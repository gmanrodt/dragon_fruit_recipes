import React, { useState, useEffect, useLocation } from "react";
import { Routes, Route } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import UserNav from '../componets/UserPageNav'

// import UserInfoPage from '../pages/UserInfoPage';
// import ViewCreatedRecipe from '../pages/ViewCreatedRecipe';
// import VeiwSavedRecipe from '../pages/ViewSavedRecipe';

export default function UserPage() {

    // const navigate = useNavigate();
    // useEffect(() => {
    //     // Call navigate() inside the useEffect hook
    //     navigate('/user');
    // }, []);

    return(
        <>
        <UserNav/>
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
        </div>
        </>
    )

}