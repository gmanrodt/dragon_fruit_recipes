import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';


export default function UserPage() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/user');
    }, []);

    return(
        cat  = "moew"
    )

}