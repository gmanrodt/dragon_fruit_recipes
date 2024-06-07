import React from "react"
import AppProvider from "../providers/AppProvider";
import { useState } from "react";
export default function AddFormFields() {

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        instructions: '',
        ingredients: '',
        measurements: ''
    });


    const handleChange = (e, fieldName) => {
        setFormData({
          ...formData,
          [fieldName]: e.target.value,
        });
      };

    return (
        <>
            <label htmlFor="ingredient">Ingredient: </label>
            <input type="text" id=""  className="amFormInput" placeholder="Add Ingredient" onChange={(e) => handleChange(e, 'ingredients')}  />

            <label htmlFor="measurement">Measurement: </label>
            <input type="" className="amFormInput" placeholder="Add Measurement" onChange={(e) => handleChange(e, 'measurements')}/>
        </>
    );
}