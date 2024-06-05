import React, { useState, useEffect, useLocation } from "react";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, FormLabel, FormControl } from 'react-bootstrap'
export default function RecipeSearch() {

    const navigate = useNavigate();
    useEffect(() => {
        // Call navigate() inside the useEffect hook
        navigate('/search');
    }, []);

    const search = searchResults();
    useEffect(() => {
        navigate("/SearchResult");   // unsure if this is right. trying to redirect user to the page with listed results
    }, []);

    return (
        <>
            <Form className="border p-3">
                <FormGroup className="mb-3">
                    <FormLabel>Search by Title</FormLabel>
                    <FormControl type="text" placeholder="Search by title" />
                </FormGroup>
                <FormGroup className="mb-3">
                    <FormLabel>Search by Category</FormLabel>
                    <select id="dropdown-basic-button" title="Select Category">
                        <option value="beef">Beef</option>
                        <option value="volvo">Chicken</option>
                        <option value="volvo">Dessert</option>
                        <option value="volvo">Lamb</option>
                        <option value="volvo">Miscellaneous</option>
                        <option value="volvo">Pork</option>
                        <option value="volvo">Seafood</option>
                        <option value="volvo">Side</option>
                        <option value="volvo">Starter</option>
                        <option value="volvo">Vegan</option>
                        <option value="volvo">Vegetarian</option>
                        <option value="volvo">Breakfast</option>
                        <option value="volvo">Goat</option>
                    </select >
                </FormGroup>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
        </>
    )

}