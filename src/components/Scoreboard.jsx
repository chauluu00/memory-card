import { useState } from 'react'

export default function Scoreboard ({score}) {
    const [bestScore, setBestScore] = useState(0);
    if (score > bestScore) {
        setBestScore(score);
    }
    return (
        <>
            <p>Current Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </>
    )
}