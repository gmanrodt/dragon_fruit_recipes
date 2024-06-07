import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"
import "../style/usernav.css"

import UserInfoPage from '../pages/UserInfoPage'
import ViewCreatedRecipe from '../pages/ViewCreatedRecipe'
import ViewSavedRecipe from '../pages/ViewSavedRecipe'

export default function UserPageNav(){

   return (
     
     <div>
       <nav className="usernav">
             <div className="usernav-container">

                <NavLink to="/user/userinfo">User Info   </NavLink>
                <span className="user-span">|</span>
                <NavLink to="/user/created">   Created Recipes  </NavLink>
                <span className="user-span">|</span>
                <NavLink to="/user/saved">   Saved Recipes   </NavLink>

             </div>
       </nav>
       
     </div>
   );

}