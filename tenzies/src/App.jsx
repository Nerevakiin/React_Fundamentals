
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



  const [dice, setDice] = useState(generateAllNewDice())

  


  const diceElements = dice.map(dieObj => <Die 
      key={dieObj.id} 
      value={dieObj.value} 
      isHeld={dieObj.isHeld} 
      hold={hold}
      id={dieObj.id}
      
    />)




  function rollDice() {
    // setDice(generateAllNewDice())
    setDice(oldRoll => oldRoll.map(roll => {
      return roll.isHeld ? roll : {...roll, value: Math.ceil(Math.random() * 6)}
    }))
  }


    function hold(id) {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      })
    })
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