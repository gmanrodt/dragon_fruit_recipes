import { useState, useEffect } from 'react'

export default function HomePage(){
    return(
        <>
        <header class='header'>
         <h1 class='title'> Dragonfruit Delights</h1>
         <img src='../assets/DragonFruit.png'/>
        <div class='login'>
         <a href='./UserPage.jsx'>Login/ Sign up</a>
         <a href='./UserPage.jsx'>Profile</a>
        </div>
        <div class='navbar'>
         <a>Search recipes</a>
         <a>Create recipes</a>
         </div>
        </header>
        <div class='about'>
        <p> Welcome to DragonFruit Delights! This is a page for finding new recipes and sharing your own. Log in or sign up to contribute to our cooking community! </p>
        </div>
        <div class='recipe1'></div>
        <div class='recipe2'></div>
        <div class='recipe3'></div>
        <footer class='footer'>
        <a href='https://github.com/AnnaManrodt/dragon_fruit_recipes' target="_blank">Github</a>
        <p> Creted by: Anna, Tyler, Kyle, Amy, Ozge</p>
        </footer>
       </>

    )

}