import React, { useState, useEffect, useLocation } from "react";
import { NavLink  } from 'react-router-dom';


export default function UserInfoPage() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/userinfohome');
    }, []);

    return(
        cat  = "moew"
    )

}