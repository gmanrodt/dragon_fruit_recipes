import React, { useState, useEffect, useLocation } from "react";
import { Routes, Route } from "react-router-dom";
import RecipeCard from "../componets/RecipeCard";

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
                <RecipeCard/>
                <RecipeCard/>
            </div>
        </>
    )

}