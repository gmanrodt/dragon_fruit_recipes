import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "../style/header.css"

import HomePage from "../pages/HomePage"
import RecipeSearchPage from "../pages/RecipeSearchPage"
import CreateRecipe from "../pages/CreateRecipe"
import LoginSignupPage from "../pages/LoginSignupPage"
import UserPage from "../pages/UserPage"

export default function Header() {

  return (
    
    <div>
      <nav className="main-nav">
        <img src="/assets/dragonfruit.png" alt="Logo" id="logo"/>
        <h1 className="flex">DragonFruit Delights</h1> 
        <div className="links">
          <div className="login">
            <NavLink to="/login">   Login/Sign up   </NavLink>
            <span>|</span>
            <NavLink to="/user">   Profile   </NavLink>
          </div>
          <br/>
          <div className="navlinks">
            <NavLink to="/">Home   </NavLink>
            <span>|</span>
            <NavLink to="/search">   Search Recipes  </NavLink>
            <span>|</span>
            <NavLink to="/create">   Create Recipes   </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};



