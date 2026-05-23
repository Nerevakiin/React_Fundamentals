import React from "react"
import { languages } from "./languages.js"



export default function AssemblyEndgame() {

    
    // map over the array and apply correct styling
    const languageArray = languages.map((language) => {

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
            <span style={styles} className="language-element" key={language.name}>{language.name}</span>
        )
    })


    // Set the state for the current word
    const [currentWord, setCurrentWord] = React.useState("react")

    // transform the string into an array and then map it and return the display of each letter
    const letterElements = currentWord.split('').map((letter, index) => {
        return (
            <span key={index}>{letter.toUpperCase()}</span>
        )
    })


    // create the keyboard and show it
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const keyboardElements = alphabet.split('').map(letter => (
        
        <button
        onClick={() => addGuessedLetter(letter)}
        key={letter}>
            {letter.toUpperCase()}
        </button>
    ))



    // Set the state for the guessed letters
    const [guessedLetters, setGuessedLetters] = React.useState([])

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetter => [...prevLetter, letter])
    }



    return (
        <main>
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>

            <section className="game-status">
                <h2>You Win!</h2>
                <p>Well done! 🎉</p>
            </section>

            <section className="language-list">
                {languageArray}
            </section>

            <section className="word">
                {letterElements}
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>
            <button className="new-game">New Game</button>
        </main>
    )
}
