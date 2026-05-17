
import Die from './Die.jsx'
import { useState, useRef, useEffect } from 'react'
import { nanoid } from 'nanoid'
// import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice())

  function generateAllNewDice() {

    const newDice = []

    for (let i = 0; i < 10; i++) {
      const randomNumber = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }
      newDice.push(randomNumber)
    }

    return newDice
  }



  // create the winning conditions

  let gameWon = false

  if (
    dice.every(die => die.isHeld) &&
    dice.every(die => die.value === dice[0].value)
  ) {
    console.log("Game won!")
    gameWon = true
  }

  // Another way the entire code above can be written but too complicated for my stupid brain right now 
  // const gameWon = dice.every(die => die.isHeld) && 
  //      dice.every(die => die.value === dice[0].value)


  // Focus the button key when the game is won
  const buttonRef = useRef(null)

  useEffect(() => {
    if (gameWon){
      buttonRef.current.focus()
    }
  }, [gameWon])





  const diceElements = dice.map(dieObj => <Die
    key={dieObj.id}
    value={dieObj.value}
    isHeld={dieObj.isHeld}
    hold={hold}
    id={dieObj.id}

  />)



  function rollDice() {
    if (!gameWon) {
      setDice(oldRoll => oldRoll.map(roll => {
        return roll.isHeld ? roll : { ...roll, value: Math.ceil(Math.random() * 6) }
      }))
    } else {
      setDice(generateAllNewDice())
    }
  }



  function hold(id) {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    })
  }



  return (
    <main>
      {gameWon && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
        {diceElements}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  )
}