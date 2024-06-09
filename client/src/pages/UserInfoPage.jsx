import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/userInfo.css"
import UserNav from '../componets/UserPageNav'
import { useAppContext } from "../providers/AppProvider";

export default function UserInfoPage() {
    const navigateTo = useNavigate();
    const [userData, setUserData] = useState({});

    const {currentUser} = useAppContext()

    useEffect(() => {
            fetch(`api/users/${userData._id}`)
                .then(response => response.json())
                .then(data => setUserData(data));
        
    }, []);
    console.log(currentUser)

useEffect(()=>{
currentUser && setUserData(currentUser)
}, [currentUser])

    // const handleDeleteUser = (userId) => {
    //     fetch(`api/users/${userId}`, {
    //         method: 'DELETE',
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             // Update the UI or navigate to a different page after deletion
    //             navigateTo.push('/'); // Redirect to the homepage
    //         } else {
    //             console.log('Error deleting user');
    //         }
    //     })
    //     .catch(error => console.error('Error deleting user:', error));
    // };

    return (
        <>
        <UserNav/>
        <div className="amUserInfo">
            <div>Username: {userData?.username}</div>
            <br/>
            <div>Email: {userData?.email}</div>
            <br/>
            {/* <div>You have saved {userData?.savedRecipes} recipes!</div>
            <br/>
            <div>You have created {userData?.createdRecipes} recipes!</div>
            <br/> */}
            <button className="margin" onClick={() => handleDeleteUser(userData.userId)}>Delete User</button>
            <button className="margin">LogOut</button>
        </div>
        </>
    );
}