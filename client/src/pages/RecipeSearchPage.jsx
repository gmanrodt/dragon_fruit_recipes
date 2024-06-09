import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ViewRecipes from "../componets/ViewRecipes"
import '../style/createRecipe.css'

export default function RecipeSearch() {

    const [formData, setFormData] = useState({
        title: '',
        category: '',
    });

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };
        
    // const navigate = useNavigate();
    // useEffect(() => {
    //     navigate('/search');
    // }, []);

        return (
            <>
                <h3>Featured Recipes</h3>
                <form onSubmit={handleSubmit}  className="border p-3 form">
                    <label htmlFor="title">Recipe Title: </label>
                    <br/>
                    <input type="text" className="inputValue" placeholder="Please type Dish title" value={formData.title} onChange={(e) => handleChange(e, 'title')} />
                    <label>Search by Category: </label>
                    <select id="dropdown-basic-button" title="Select Category" onChange={(e) => handleChange(e, 'category')} value={formData.category}>
                        <option value="-- Select an option --">-- Select an option --</option>
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
                    <button type="submit" variant="primary">Submit</button>
                </form>
                <div>
                    <ViewRecipes />
                </div>
            </>
    )
    
};

