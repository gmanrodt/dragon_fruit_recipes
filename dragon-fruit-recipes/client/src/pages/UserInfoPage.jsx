import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function UserInfoPage() {
    const history = useHistory();
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
                history.push('/'); // Redirect to the homepage
            } else {
                console.log('Error deleting user');
            }
        })
        .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div className="amUserInfo">
            <div>Username: {userData.userName}</div>
            <div>Email: {userData.email}</div>
            <div>You have saved {userData.savedRecipes} recipes!</div>
            <div>You have created {userData.createdRecipes} recipes!</div>
            <button onClick={() => handleDeleteUser(userData.userId)}>Delete User</button>
        </div>
    );
}