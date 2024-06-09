import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../style/home.css"
import RecipeCard from "../componets/RecipeCard";

//fixed
export default function HomePage() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/');
    }, []);


    //TO DO: replace dataset with API details then uncomment the logic below

    // const [ featuredRecipe, setFeaturedRecipe ] = useState()

    // function getRandomRecipe(){
    //     const randomIdx = getRandomNumber(0, dataset.length - 1)
    //     const recipe = dataset[randomIdx]
    //     setFeaturedRecipe(recipe)
    // }

    // function getRandomNumber(min, max){
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }

    // useEffect(() => {
    //     getRandomRecipe()
    // },[])

    return (
        <>
            <div className='about'>
                <p> Welcome to DragonFruit Delights! This is a page for finding new recipes and sharing your own. Log in or sign up to contribute to our cooking community! </p>
            </div>
            <div className="recipe-card-container">
                <div className='recipe-card'>
                    <RecipeCard />
                </div>
                <div className='recipe-card'>
                <RecipeCard />
                </div>
                <div className='recipe-card'>
                <RecipeCard />
                </div>
            </div>

            {/*TO DO: Uncomment this section below when the commented out logic is uncommented and make sure details below match API details. */}

            {/* <section className="w-25">
                <BorderedBox>
                    <h2>Featured Recipe</h2>
                    <h3>{ featuredRecipe?.name }</h3>
                    <p>Price: $ {featuredRecipe?.price} </p>
                </BorderedBox>

                <button onClick={getRandomRecipe}>New Featured Recipe</button>

            </section> */}
        </>
    )

}
