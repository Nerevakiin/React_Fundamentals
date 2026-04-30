import express from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 8000
// const secret = process.env.ANTHROPIC_API_KEY

app.use(cors())
app.use(express.json())



app.use(express.static(path.join(import.meta.dirname, './dist')))


app.get('/api/message', (req, res) => {
    res.json({ message: "hello from the express server" })
})






app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})