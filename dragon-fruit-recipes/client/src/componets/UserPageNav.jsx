import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import UserInfoPage from '../pages/UserInfoPage'
import ViewCreatedRecipe from '../pages/ViewCreatedRecipe'
import ViewSavedRecipe from '../pages/ViewSavedRecipe'

export default function UserPageNav(){

   return (
     
     <div>
       <nav>
             <div>

                <NavLink to="/">User Info   </NavLink>
                <span>|</span>
                <NavLink to="/created">   Created Recipes  </NavLink>
                <span>|</span>
                <NavLink to="/saved">   Saved Recipes   </NavLink>

             </div>
       </nav>
       
     </div>
   );

}