import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

import Main from './Main'



describe("Main", () => {

  test("displays the component", () => {
    render(<Main />)

    expect(screen.getByText("One does not simply")).toBeInTheDocument()
    expect(screen.getByText("Walk into Mordor")).toBeInTheDocument()
    expect(screen.getByRole("img").src).toBe("https://i.imgflip.com/1bij.jpg")
  })

  test("Check if everything in the UI works as expected", () => {
    render(<Main />)

    expect(screen.getByText("Top Text")).toBeInTheDocument()
    expect(screen.getByText("Bottom Text")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("One does not simply")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Walk into Mordor")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()

  })

})





