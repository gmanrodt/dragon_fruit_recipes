import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react"

import UserInfoPage from '../pages/UserInfoPage'
import ViewCreatedRecipe from '../pages/ViewCreatedRecipe'
import ViewSavedRecipe from '../pages/ViewSavedRecipe'

export default function UserPageNav(){


   const [currentPage, setCurrentPage] = useState('UserPage');

   const renderPage = () => {
     if (currentPage === 'UserPage') {
       return <UserInfoPage />;
     }
     if (currentPage === 'CreatedRecipe') {
       return <ViewCreatedRecipe />;
     }
     if (currentPage === 'SavedRecipe') {
       return <ViewSavedRecipe />;
     }
    
   };
   const handlePageChange = (page) => setCurrentPage(page);

   return (
     
     <div>
       <nav>
             <div>
                <NavLink to="/">User Info   |</NavLink>
                <NavLink to="/user/created">   Created Recipes  |</NavLink>
                <NavLink to="/user/saved">   Saved Recipes   |</NavLink>
             </div>
       </nav>
       
     </div>
   );

}