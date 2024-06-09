

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../style/searchPage.css"

export default function SingleRecipe() {

    const params = useParams()
    const [recipe, setRecipe] = useState()
    const [formData, setFormData] = useState({
        comments: ""
    })

    function lookUpRecipe() {
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
    function handleInputChange(event) {
        setMessage("")
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    async function saveReview(event) {
        event.preventDefault();
        try {
            const response = await fetch("/api/review", {
                method: 'POST',
                body: JSON.stringify({
                    Comments: formData.comments
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json()
            console.log(result)
            clearForms()
            if (result.status === 'success') {
                console.log('sucess')
                ;
            } else {
                throw new Error()
            }
        } catch (err) {
            console.log(err)
            console.log("can not save review")
        }
    }

    const [showForm, setShowForm] = useState(false);
    const handleButtonClick = () => {
        setShowForm(true);
    };

    useEffect(() => {
        if (params) {
            lookUpRecipe()
        }
    }, [params])

    if (!recipe) return <></>
    return (
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
            <div className="addReview">
                <button onClick={handleButtonClick}>Add review</button>
                {showForm && (
                    <form>
                        <label htmlFor="name">Comments: </label>
                        <textarea type="text" id="comments" value={formData.comments} onChange={handleInputChange} />
                        <button onClick={saveReview}>Save review</button>
                    </form>
                )}
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