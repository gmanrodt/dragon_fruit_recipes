import React from "react"

export default function AddFormFields() {

    return (
        <>
            <label for="ingredient">Ingredient: </label>
            <input type="text" id=""  className="amFormInput" placeholder="Add Ingredient" />

            <label for="measurement">Measurement: </label>
            <input type="" className="amFormInput" placeholder="Add Measurement" />
        </>
    );
}