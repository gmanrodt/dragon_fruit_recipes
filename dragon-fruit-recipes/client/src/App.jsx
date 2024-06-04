import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './pages/HomePage';
import LoginSignup from './pages/LoginSignupPage';
import RecipeSearch from './pages/RecipeSearchPage';
import SingleRecipe from './pages/SingleRecipePage';
import CreateRecipe from './pages/CreateRecipe';
import UserInfoPage from './pages/UserInfoPage';
import UserInfo from './pages/UserPage';
import ViewCreatedRecipe from './pages/ViewCreatedRecipe';
import VeiwSavedRecipe from './pages/ViewSavedRecipe';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/search" element={<RecipeSearch />} />
          <Route path="/recipe" element={<SingleRecipe />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/userinfo" element={<UserInfoPage />} />
          <Route path="/user" element={<UserInfo />} />
          <Route path="/created" element={<ViewCreatedRecipe />} />
          <Route path="/saved" element={<VeiwSavedRecipe />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
