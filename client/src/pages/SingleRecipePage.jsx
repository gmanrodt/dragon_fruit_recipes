import React, { useState, useEffect, useLocation } from "react";
import { useNavigate } from 'react-router-dom';
// import Recipe from "../../../server/models/CreatedRecipe";

export default function SingleRecipe() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/recipe');
    }, []);

    const [data, setData] = useState(null);
    const id = 'your_id_here'; // Replace 'your_id_here' with the actual ID you want to fetch

    useEffect(() => {
        const fetchOneRecipe = async () => {
            try {
                const response = await fetch(`add path here ${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    const responseData = await response.json();
                    setData(responseData);
                } else {
                    console.error('Failed to fetch data');
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
            }
        };

        fetchOneRecipe();
    }, [id]);


    const [formData, setFormData] = useState({
        comments: '',
        currentRating: ''
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    };

    const postReview = async () => {
        try {
            const response = await fetch('http://your-backend-api.com/api/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Response from server:', responseData);
            } else {
                console.error('Failed to submit form data');
            }
        } catch (error) {
            console.error('An error occurred while submitting form data:', error);
        }
    };

    postReview();

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [totalStars, setTotalStars] = useState(5);

    const handleChange = (e) => {
        setTotalStars(parseInt(Boolean(e.target.value, 10) ? e.target.value : 5));
    };

    // const ingredient = Recipe.ingredient 
    // const measurements = Recipe.measurements
    // const concatedatedIngMeas = [...ingredient, ...measurements];

    return (
        <>
            {/* <h1>{Recipe.title}</h1>
            <h3>{Recipe.category}</h3>
            <img></img>
            <p>
                {Recipe.instructions}
            </p>
            <aside>
                <p>
                    {concatedatedIngMeas}
                </p>
            </aside> */}
            <form >
                <h4>Add a Review</h4>
                {[...Array(totalStars)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index}>
                            <input
                                key={star}
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={handleChange}
                            />
                            <span
                                className="star"
                                style={{
                                    color:
                                        currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                                }}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            >
                                &#9733;
                            </span>
                        </label>
                    );
                })}

                <label htmlFor="comment">What'd you think?</label>
                <textarea type="text" id="comment" value={formData.comments} onChange={handleFormChange} />
                <input type="submit" onSubmit={handleSubmit}/> 
            </form>
        </>
    )

}