import { useState } from "react";
export default function AddFormFields() {

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        instructions: '',
        ingredients: [''],
        measurements: [''],
        picture: ''
    });

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    return (
        <>
            <label htmlFor="ingredients">Ingredient: </label>
            <input type="text" className="amFormInput" placeholder="Add Ingredient" value={formData.ingredients} onChange={(e) => handleChange(e, 'ingredients')}  />

            <label htmlFor="measurements">Measurement: </label>
            <input type="text" className="amFormInput" placeholder="Add Measurement" value={formData.measurements} onChange={(e) => handleChange(e, 'measurements')}/>
        </>
    );
}
