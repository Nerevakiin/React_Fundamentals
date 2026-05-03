
import Die from './Die.jsx'
import {useState} from 'react'
import { nanoid } from 'nanoid'

export default function App() {


  function generateAllNewDice() {
    
    const newDice = []

    for (let i = 0; i < 10; i++) {
      const randomNumber = {
        value: Math.ceil(Math.random() * 6),
        isHeld: true,
        id: nanoid()
      }
      newDice.push(randomNumber)
    }

    return newDice
  }



  const [dice, setDice] = useState(generateAllNewDice())

  
  function hold(id) {
    console.log(id)
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
  }

  const diceElements = dice.map(dieObj => <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld} 
      hold={hold}
      id={dieObj.id}
      
    />)




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