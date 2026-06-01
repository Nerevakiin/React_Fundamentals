import React from "react"
import { languages } from "./languages.js"
import { clsx } from 'clsx';
import { getFarewellText, getRandomWord } from './utils.js'
import Confetti from "react-confetti"



export default function AssemblyEndgame() {

    // ============ State values ============
    // Set the state for the current word
    const [currentWord, setCurrentWord] = React.useState(() => getRandomWord())

    // Set the state for the guessed letters
    const [guessedLetters, setGuessedLetters] = React.useState([])




    // ============ Derived values ============
    const wrongGuessCount = guessedLetters.filter((letter => !currentWord.includes(letter))).length

    // Handle when the game is over
    const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter))
    const isGameLost = wrongGuessCount >= languages.length - 1
    const isGameOver = isGameWon || isGameLost

    // === Say farewell to lost languages ===
    // 1. Get the last guessed letter
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    // 2. Check if the last guessed letter wrong
    const isLastGuessWrong = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)




    // ============ Static values ============
    // map over the array and apply correct styling
    const languageArray = languages.map((language, index) => {

        const isLanguageLost = index < wrongGuessCount

        const styles = {
            backgroundColor: language.backgroundColor,
            color: language.color
        }

        return (
            <span
                style={styles}
                className={`language-element ${isLanguageLost ? "lost" : ""}`}
                key={language.name}
            >
                {language.name}
            </span>
        )
    })



    // OnClick function that gets called by pressing the button with a callback function (see above)
    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters =>

            // If the letter has already been clicked and belongs in the array, dont add it.
            prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter])
    }

    // transform the string into an array and then map it and return the display of each letter
    const letterElements = currentWord.split('').map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(isGameLost && !guessedLetters.includes(letter) && "reveal")


        return (
            <span className={letterClassName} key={index}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
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

        // using the clsx dependency to make conditionals easier
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        // const styles = {
        //     backgroundColor: currentWord.includes(letter) ? 'green' : 'red'
        // }

        return (

            <button
                onClick={() => addGuessedLetter(letter)} // ΤΑΚΕ Α GOOD LOOK AT THIS!
                className={className}
                disabled={isGameOver}
                aria-label={`Letter ${letter}`}
                key={letter}
            >
                {letter.toUpperCase()}
            </button>
        )
    })


    // Conditionally add classes if game is won or lost
    const gameOverClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessWrong
    })

    function renderGameStatus() {
        if (!isGameOver && isLastGuessWrong) {
            return <p className="farewell-message">{getFarewellText(languages[wrongGuessCount - 1].name)}</p>
        }
        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly boi</p>
                </>
            )
        }
    }


    // Handle the New Game functionality and button
    function startNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
    }



    return (
        <main>
            {isGameWon && <Confetti />}
            <header>
                <h1>Assembly: Endgame</h1>
                <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
            </header>


            <section className={gameOverClass}>

                {
                    renderGameStatus()// Conditionally render the game is won or lost when the game is over  
                }

            </section>

            <section className="language-list">
                {languageArray}
            </section>

            <section className="word">
                {letterElements}
            </section>


            {/* Combined visually-hidden aria-live region for status updates */}
            <section
                className="sr-only"
                aria-live="polite"
                role="status"
            >
                <p>
                    {currentWord.includes(lastGuessedLetter) ?
                        `Correct! The letter ${lastGuessedLetter} is in the word.` :
                        `Sorry, the letter ${lastGuessedLetter} is not in the word.`
                    }
                    You have {languages.length - 1} attempts left.
                </p>
                <p>
                    Current word: {currentWord.split("").map(letter =>
                        guessedLetters.includes(letter) ? letter + "." : "blank" // I have no idea what's happening here but it works
                    ).join(" ")}
                </p>
            </section>

            <section className="keyboard">
                {keyboardElements}
            </section>
            {isGameOver && <button className="new-game" onClick={startNewGame}>New Game</button>}
        </main>
    )
}
