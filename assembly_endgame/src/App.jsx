import React from "react"
import { languages } from "./languages.js"
import { clsx } from 'clsx';



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
    const keyboardElements = alphabet.split('').map(letter => {

        // Creating the logic where when a keyboard buttin is clicked, it conditionally turns it green or red if it belongs to the 
        // current word or not
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter)
        const isWrong = isGuessed && !currentWord.includes(letter)


        const styles = {
            backgroundColor: currentWord.includes(letter) ? 'green' : 'red'
        }

        return (

            <button
                onClick={() => addGuessedLetter(letter)} // ΤΑΚΕ Α GOOD LOOK AT THIS!
                className={ }
                key={letter}
            >
                {letter.toUpperCase()}
            </button>
        )
    })



    // Set the state for the guessed letters
    const [guessedLetters, setGuessedLetters] = React.useState([])

    // OnClick function that gets called by pressing the button with a callback function (see above)
    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>

            // If the letter has already been clicked and belongs in the array, dont add it.
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter])
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
