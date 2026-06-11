import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App.jsx'

test("ensures troll face image is accessible", () => {
    render(<App/>)
    expect(screen.getByAltText("Troll face")).toBeInTheDocument()
})

test("ensure the meme image is accessible and has an alt text", () => {
    render(<App />)

    expect(screen.getByAltText("One Does Not Simply")).toBeInTheDocument()

})