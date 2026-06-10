import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import Anthropic from '@anthropic-ai/sdk'

dotenv.config()

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(import.meta.dirname, './dist')))

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all
of those ingredients, You don't need to use every ingredient they mention in your recipe. The recipe can include additional
ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it
easier to render to a web page.
`

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
})


app.get('/api/message', (req, res) => {
    res.json({ message: "hello from the express server" })
})


app.post('/api/recipe', async (req, res) => {
    try {
        const { ingredients } = req.body
        const ingredientsString = ingredients.join(", ")

        const msg = await anthropic.messages.create({
            model: 'claude-haiku-4-5-20251001',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: [
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ]
        })

        res.json({ recipe: msg.content[0].text })
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Failed to generate recipe" })
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
