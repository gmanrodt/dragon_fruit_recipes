import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
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

        try {
            const response = await fetch('api/recipes', { //change stuff here
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify(formData)
            });
            if (response.ok) {
                // Handle successful ,form submission
                document.location.replace('/results')
                console.log(response)
                console.log('Form data submitted successfully');
            } else{
                console.log('problem')
            }
        } catch (error) {
            console.error('An error occurred while submitting form data:', error);
        }
    };
        
        


    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/search');
    }, []);
    // const searchresult= Button.onClick(
    //     document.location.replace('/searchresult')
    // )

    // const search = searchResult();

    // useEffect(() => {
    //     const fetchOneResult = async () => {
    //         try {
    //             const response = await fetch({
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //             if (response.ok) {
    //                 console.log('git here')
    //                 const responseData = await response.json();
    //                 setData(responseData);
    //             } else {
    //                 console.error('Failed to fetch data');
    //             }
    //             } catch(error) {
    //                 console.error('An error occured while fetching data:', error);
    //             }
    //         }
    //     })
        


        return (
            <>
        <h3>Featured Recipes</h3>
        {/* add recipe card */}
            <form onSubmit={handleSubmit}  className="border p-3 form">
            <label htmlFor="title">Recipe Title: </label>
                            <br/>
                            <input type="text" placeholder="Please type Dish title" value={formData.title} onChange={(e) => handleChange(e, 'title')} />
                    <label>Search by Category: </label>
                    <select id="dropdown-basic-button" title="Select Category" onChange={(e) => handleChange(e, 'category')} value={formData.category}>
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
        </>
    )
    
};

