import React, { useState, useEffect, useLocation } from "react"
import { useNavigate } from 'react-router-dom';
import { useAppContext } from "../providers/AppProvider";
import AddFormFields from "../componets/AddFormFields";
import '../style/createRecipe.css'
import { NavLink } from "react-router-dom";
export default function CreateRecipe() {

    const { currentUser } = useAppContext()

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        instructions: '',
        igredient: '',
        measurement: ''
    });

    const handleChange = (e, fieldName) => {
        setFormData({
          ...formData,
          [fieldName]: e.target.value,
        });
      };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/users/${currentUser._id}`, { //change stuff here
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle successful form submission
                console.log(response)
                console.log('Form data submitted successfully');
                //history.push('/my-new-page');
            } else {
                // Handle errors if submission fails
                console.error('Form data submission failed');
            }
        } catch (error) {
            console.error('An error occurred while submitting form data:', error);
        }
    };


    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/create');
    }, []);

    const [inputIngredient, setInputIngredient] = useState([]);

    const addFields = (event) => {
        event.preventDefault();
        setInputIngredient([...inputIngredient, <AddFormFields key={inputIngredient.length} />]);
    }

    return (
        <>
            <h2>Create a Recipe!</h2>
            <div className="outer">
                <form onSubmit={handleSubmit} className="formParent">
                    <div className="firstThreeFields">
                        <div className="top-row">
                            <label htmlFor="title">Recipe Title: </label>
                            <br/>
                            <input type="text" placeholder="Please type Dish title" value={formData.title} onChange={(e) => handleChange(e, 'title')} />
                        </div>
                        <div className="top-row">
                            <label htmlFor="category">Category: </label>
                            <br/>
                            <select id="dropdown-basic-button" title="Select Category" value={formData.category} onChange={(e) => handleChange(e, 'category')} >
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
                        </div>
                        <div className="top-row">
                            <label htmlFor="instructions">Instructions: </label>
                            <br/>
                            <textarea type="text" id="instructions" placeholder="Please enter Instructions" value={formData.instructions} onChange={(e) => handleChange(e, 'instructions')}  />
                        </div>
                    </div>
                    <div className="ingredientList">
                        <div className="rowStyling">
                            {inputIngredient}
                        </div>
                    </div>
                    <button onClick={addFields} className="addIngredientButton">Add Another Ingredient</button>
                    <br/>
                    <button type="submit" value="Submit">Submit Recipe</button>
                </form>
            </div>
        </>
    )


}