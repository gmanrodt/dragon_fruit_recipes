import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function ViewCreatedRecipe() {
    
    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/created');
    }, []);

    return(
        <>
        <h1>Created Recipes page</h1>
       </>
    )

}