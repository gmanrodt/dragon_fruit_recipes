import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import HomePage from "../pages/HomePage"
import RecipeSearchPage from "../pages/RecipeSearchPage"
import CreateRecipe from "../pages/CreateRecipe"
import LoginSignupPage from "../pages/LoginSignupPage"
import UserPage from "../pages/UserPage"

export default function Header() {

   const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <HomePage />;
    }
    if (currentPage === 'RecipeSearch') {
      return <RecipeSearchPage />;
    }
    if (currentPage === 'CreateRecipe') {
      return <CreateRecipe />;
    }
    if (currentPage === 'User') {
      return <UserPage />;
    }
    return <LoginSignupPage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div>
      <nav>
         <img src="/assets/dragonfruit.png" alt="Logo" />
         <h1 className="flex">DragonFruit Delights</h1> 
            <div>
               <NavLink to="/login">   Login/Sign up   |</NavLink>
               <NavLink to="/user">   Profile   |</NavLink>
            </div>
            <div>
               <NavLink to="/">Home   |</NavLink>
               <NavLink to="/search">   Search Recipes  |</NavLink>
               <NavLink to="/create">   Create Recipes   |</NavLink>
            </div>
      </nav>
      



    </div>
  );
}



