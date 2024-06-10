// import React, { useState, useEffect, useLocation } from "react";
// import { useNavigate } from 'react-router-dom';
// // import Recipe from "../../../server/models/CreatedRecipe";

// export default function SingleRecipe() {

//     const navigate = useNavigate();
//     useEffect(() => {
//         // Call navigate() inside the useEffect hook
//         navigate('/recipe');
//     }, []);

//     const [data, setData] = useState(null);
//     const id = 'your_id_here'; // Replace 'your_id_here' with the actual ID you want to fetch

//     useEffect(() => {
//         const fetchOneRecipe = async () => {
//             try {
//                 const response = await fetch(`add path here ${id}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });

//                 if (response.ok) {
//                     const responseData = await response.json();
//                     setData(responseData);
//                 } else {
//                     console.error('Failed to fetch data');
//                 }
//             } catch (error) {
//                 console.error('An error occurred while fetching data:', error);
//             }
//         };

//         fetchOneRecipe();
//     }, [id]);


//     const [formData, setFormData] = useState({
//         comments: '',
//         currentRating: ''
//     });

//     const handleFormChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         postData();
//     };

//     const postReview = async () => {
//         try {
//             const response = await fetch('http://your-backend-api.com/api/data', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 const responseData = await response.json();
//                 console.log('Response from server:', responseData);
//             } else {
//                 console.error('Failed to submit form data');
//             }
//         } catch (error) {
//             console.error('An error occurred while submitting form data:', error);
//         }
//     };

//     postReview();

//     const [rating, setRating] = useState(null);
//     const [hover, setHover] = useState(null);
//     const [totalStars, setTotalStars] = useState(5);

//     const handleChange = (e) => {
//         setTotalStars(parseInt(Boolean(e.target.value, 10) ? e.target.value : 5));
//     };

//     // const ingredient = Recipe.ingredient 
//     // const measurements = Recipe.measurements
//     // const concatedatedIngMeas = [...ingredient, ...measurements];

//     return (
//         <>
//             {/* <h1>{Recipe.title}</h1>
//             <h3>{Recipe.category}</h3>
//             <img></img>
//             <p>
//                 {Recipe.instructions}
//             </p>
//             <aside>
//                 <p>
//                     {concatedatedIngMeas}
//                 </p>
//             </aside> */}
//             <form >
//                 <h4>Add a Review</h4>
//                 {[...Array(totalStars)].map((star, index) => {
//                     const currentRating = index + 1;
//                     return (
//                         <label key={index}>
//                             <input
//                                 key={star}
//                                 type="radio"
//                                 name="rating"
//                                 value={currentRating}
//                                 onChange={handleChange}
//                             />
//                             <span
//                                 className="star"
//                                 style={{
//                                     color:
//                                         currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
//                                 }}
//                                 onMouseEnter={() => setHover(currentRating)}
//                                 onMouseLeave={() => setHover(null)}
//                             >
//                                 &#9733;
//                             </span>
//                         </label>
//                     );
//                 })}

//                 <label htmlFor="comment">What'd you think?</label>
//                 <textarea type="text" id="comment" value={formData.comments} onChange={handleFormChange} />
//                 <input type="submit" onSubmit={handleSubmit}/> 
//             </form>
//         </>
//     )

// }

import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import "../style/searchPage.css"

export default function SingleRecipe(){

    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    
    const params = useParams()
    const [recipe, setRecipe] = useState()

    function lookUpRecipe(){
        fetch(`/api/recipes/${params.recipeId}`)
        .then(response => response.json())
        .then(data => {
            setRecipe(data)
        })
        .catch(error => {
            setErrorMessage("Failed to load recipes");
            console.error('Error:', error);
        });
    }

    useEffect(() => {
        if(params){
            lookUpRecipe()
        }
    }, [params])

    if(!recipe) return <></>
    return(
        <div className="singleRecipePage">
            <h1>{recipe.title}</h1>
            <h3>Category: {recipe.category}</h3>
            <img className="singleImageSrc" src={recipe.picture} alt={recipe.title} />
            <h3 className="singleInstructions"><span>Instructions:</span> {recipe.instructions}</h3>
            <div className="ingMeasBox">
                {recipe.ingredients.map((ingredient, index) => (
                    <h3 className="ingMeas" key={index}>{ingredient} {recipe.measurements[index]}</h3>
                ))}
            </div>
            {recipe.reviews.map((review, index) => (
                <div key={index}>
                    <h3>Rating: {review.rating}</h3>
                    <h3>Comments: {review.comments}</h3>
                </div>
            ))}
        </div>
    )
}