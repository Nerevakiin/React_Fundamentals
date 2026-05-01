
import Die from './Die.jsx'
import {useState} from 'react'

export default function App() {


  function generateAllNewDice() {
    
    const newDice = []

    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.ceil(Math.random() * 6)
      newDice.push(randomNumber)
    }

    return newDice
  }


  const [dice, setDice] = useState(generateAllNewDice())


  const diceElements = dice.map(number => <Die value={number} />)
  


  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  )
}