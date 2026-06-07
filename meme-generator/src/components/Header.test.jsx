import {test, expect} from 'vitest'
import {render, screen} from '@testing-library/react'

import Header from './Header'

test("displays the app name", () => {
    render(<Header />)

    expect(screen.getByText("Meme Generator")).toBeInTheDocument()
})

test("displays the trollface", () => {
    render(<Header />)

    expect(screen.getByRole("img").src).toContain("Trollface.png")
})