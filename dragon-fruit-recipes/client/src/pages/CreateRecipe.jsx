import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import addFormFeilds from "../componets/AddFormFields";

export default function CreateRecipe() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/create');
    }, []);


    const [inputIngredient, setInputIngredient] = useState([]);

    const addFields = () => {
        setInputIngredient([...inputIngredient, <addFormFeilds key={inputIngredient.length} />])
    }


    return (
        <>
            <h1>Create a Recipe!</h1>
            <form>
                <label for="title">Recipe Title</label>
                <input type="text" id="" placeholder="Please type Dish title" />

                <label for="category">Category</label>
                <select id="dropdown-basic-button" title="Select Category">
                    <option value="beef">Beef</option>
                    <option value="volvo">Chicken</option>
                    <option value="volvo">Dessert</option>
                    <option value="volvo">Lamb</option>
                    <option value="volvo">Miscellaneous</option>
                    <option value="volvo">Pork</option>
                    <option value="volvo">Seafood</option>
                    <option value="volvo">Side</option>
                    <option value="volvo">Starter</option>
                    <option value="volvo">Vegan</option>
                    <option value="volvo">Vegetarian</option>
                    <option value="volvo">Breakfast</option>
                    <option value="volvo">Goat</option>
                </select >
                <label for="instructions"></label>
                <textarea type="text" id="instructions" placeholder="Please enter Instructions" />
                <div className="ingredientList">
                    <div className="rowStyling">

                    </div>
                    <button onClick={ addFields }>Add Another Ingredient</button>
                </div>

            </form>
        </>
    )

}