import React, { useState, useEffect, useLocation } from "react"
import { useNavigate } from 'react-router-dom';
import AddFormFields from "../componets/AddFormFields";

export default function CreateRecipe() {


        const [formData, setFormData] = useState({
            title: '',
            category: '',
            instructions: '',
            igredient: '',
            measurement: ''
        });
    
    
        const handleChange = (e) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                const response = await fetch('this will need to be added', { //change stuff here
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
    
                if (response.ok) {
                    // Handle successful form submission
                    console.log('Form data submitted successfully');
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
            <h1>Create a Recipe!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Recipe Title</label>
                <input type="text" id="" placeholder="Please type Dish title" value={formData.title} onChange={handleChange}/>

                <label htmlFor="category">Category</label>
                <select id="dropdown-basic-button" title="Select Category" value={formData.category} onChange={handleChange}>
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
                <label htmlFor="instructions"></label>
                <textarea type="text" id="instructions" placeholder="Please enter Instructions" value={formData.instructions} onChange={handleChange}/>
                <div className="ingredientList">
                    <div className="rowStyling">
                        {inputIngredient}
                    </div>
                    <button onClick={addFields}>Add Another Ingredient</button>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )


}