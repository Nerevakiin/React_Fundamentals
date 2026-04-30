import React from 'react'
import ClaudeRecipe from './ClaudeRecipe.jsx'
import IngredientsList from './IngredientsList.jsx'
import { getRecipeFromChefClaude } from '../ai.js'

// import getRecipeFromChefClaude from './ai.js'

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    
    async function getRecipe() {
        
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)

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
                ref={recipeSection}
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}
            
            
            {recipe && <ClaudeRecipe recipe={recipe} />}


        </main>
    )
}