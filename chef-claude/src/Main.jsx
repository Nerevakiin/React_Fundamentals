import React from 'react'
import ClaudeRecipe from './components/ClaudeRecipe.jsx'
import IngredientsList from './components/IngredientsList.jsx'
// import getRecipeFromChefClaude from './ai.js'

export default function Main() {


    const [ingredients, setIngredients] = React.useState([])


    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    aria-label="add-ingredient"
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            
            
            
            {ingredients.length > 0 && 
            <IngredientsList
                ingredients={ingredients}
                toggleRecipeShown={toggleRecipeShown}
            />}
            
            
            
            
            {recipeShown && <ClaudeRecipe />}




        </main>
    )
}