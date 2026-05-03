
import Die from './Die.jsx'
import {useState} from 'react'
import { nanoid } from 'nanoid'

export default function App() {


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

  console.log(generateAllNewDice())


  const [dice, setDice] = useState(generateAllNewDice())

  const diceElements = dice.map(dieObj => <Die key={dieObj.id} value={dieObj.value} />)

  function rollDice() {
    setDice(generateAllNewDice())
  }



  return (
    <main>
      <div className="dice-container">
        {diceElements}
        <button className="roll-dice" onClick={rollDice}>Roll</button>
      </div>
    </main>
  )
}