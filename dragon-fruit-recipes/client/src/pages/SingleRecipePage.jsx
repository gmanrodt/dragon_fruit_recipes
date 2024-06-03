import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';


export default function SingleRecipe() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/recipe');
    }, []);

    return(
        cat  = "moew"
    )

}