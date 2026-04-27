import Anthropic from '@anthropic-ai/sdk'
// import {query} from '@qwen-code/sdk'



const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all 
of those ingredients, You don't need to use every ingredient they mention in your recipe. The recipe can include additional
ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it
easier to render to a web page.
`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true // === IMPORTANT!! CHANGE THIS BEFORE DEPLOYING !! ===
})


export async function getRecipeFromChefClaude(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")


    const msg = await anthropic.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            {role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`},
        ]
    })

    return msg.content[0].text 

}


const qwen = new QWEN({
    apiKey: process.env.QWEN_API_KEY,
    dangerouslyAllowBrowser: true 
})

export async function getRecipeFrom Qwen(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        
        const response = query({
            prompt: SYSTEM_PROMPT,
            messages: [
                {role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`},
            ]

        })

        return response.content[0].text 


    } catch (err) {
        console.error(err.messages)
    }
}


