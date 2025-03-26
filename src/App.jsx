import { useState } from 'react'
import './App.css'
import Scoreboard from './components/Scoreboard'
import Container from './components/Container'

function App() {
  const [score, setScore] = useState(0);
  
  return (
    <>
      <h2>Pokémon Memory Game</h2>
      <p>Get points by clicking on a card but don't click on any more than once!</p>
      <Scoreboard score={score}></Scoreboard>
      <Container setScore={setScore} ></Container>
    </>
  )
}

export default App
