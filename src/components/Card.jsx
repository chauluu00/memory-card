import { useState, useEffect } from 'react'

export default function Card ({id, onClick}) {
    const [name, setName] = useState("");

    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${id}.png`
    
    useEffect(() => {
        async function fetchName () {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await response.json();
            setName(data.name);
        }
        fetchName();
    },[])
    
    return (
        <div onClick={() => onClick(id)} className="card">
            <div className="name">{capitalize(name)}</div>
            <img src={url} alt="" height=""/>
        </div>
    )
}

function capitalize(val){
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
