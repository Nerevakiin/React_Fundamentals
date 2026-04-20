import React from 'react'

export default function Main() {


    const [ingredients, setIngredients] = React.useState([])
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    
    
    
    // function handleSubmit(e) {
        
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget)
    //     const newIngredient = formData.get("ingredient")

    //     setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    // }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }


    return (
        <main>
            {/* <form onSubmit={handleSubmit} className="add-ingredient-form"> */}
            <form action={addIngredient} className="add-ingredient-form">
                <input 
                aria-label="add-ingredient"
                type="text"
                placeholder="e.g. oregano"
                name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}