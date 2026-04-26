import React from 'react'
import ClaudeRecipe from './components/ClaudeRecipe.jsx'
import IngredientsList from './components/IngredientsList.jsx'
import { getRecipeFromChefClaude } from './ai.js'
// import getRecipeFromChefClaude from './ai.js'

export default function Main() {


    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)

    
    async function getRecipe() {
        
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)

        console.log(recipeMarkdown)


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
                getRecipe={getRecipe}
            />}
            
            
            
            
            {recipeShown && <ClaudeRecipe />}




        </main>
    )
}