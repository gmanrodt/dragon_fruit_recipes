import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import RecipeSearch from "./RecipeSearchPage";
export default function searchResults() {

  async function getSearchResults() {
    const result = await ("/api/recipes")
    const data = result.json()

  }
  // <ChildComponent category={formData.category} />

  async function getByCategory(){
    fetch(`/api/recipes/${category}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(recipe => {
    // Handle the retrieved recipe data
    console.log(recipe);
  })
  .catch(error => {
    console.error('Error fetching recipe:', error);
  });
  }

return (
  <>
    <h3>Search Results</h3>
    <ul>
      {results.map(results => (
        <li key={recipes._id}>{recipes.title}</li>
      ))}
    </ul>
  </>
)

};