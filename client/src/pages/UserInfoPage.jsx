import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/userInfo.css"


export default function UserInfoPage() {
    const navigateTo = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch('api/something')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    const handleDeleteUser = (userId) => {
        fetch(`api/users/${userId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                // Update the UI or navigate to a different page after deletion
                navigateTo.push('/'); // Redirect to the homepage
            } else {
                console.log('Error deleting user');
            }
        })
        .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <>
        <div className="amUserInfo">
            <div>Username: {userData.userName}</div>
            <div>Email: {userData.email}</div>
            <div>You have saved {userData.savedRecipes} recipes!</div>
            <div>You have created {userData.createdRecipes} recipes!</div>
            <button onClick={() => handleDeleteUser(userData.userId)}>Delete User</button>
        </div>
        </>
    );
}