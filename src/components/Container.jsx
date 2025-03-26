import { useState } from 'react'
import Card from "./Card"

export default function Container ({setScore}) {
    const [idArray, setIdArray] = useState(() => getNewArray()); 
    const [selected, setSelected] = useState([]);

    function handleClick(id) {
        setSelected(prevSelected => [...prevSelected, id]); // Add clicked card to array of selected cards
        setIdArray(prevIdArray => shuffle(prevIdArray));
        if (!selected.includes(id)) {
            setScore(prevScore => prevScore + 1)
        } else {
            setScore(0);
            setSelected([]);
        }
        
    }

    return (
        <div className="container">
            {idArray.map(id => (
                <Card 
                    key={id}
                    id={id}
                    onClick={handleClick}
                />     
            ))}
        </div>
    )
}

function getNewArray () {
    const newSet = new Set(); // Each value in a set is unique
    while(newSet.size !== 12) {
        newSet.add(Math.floor(Math.random() * 493) + 1);
    }
    return Array.from(newSet); // Convert to array to apply .map() method
}
// Durstenfeld shuffle
function shuffle(array) {
    const shuffled = [...array]; // clone to avoid modifying original array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}