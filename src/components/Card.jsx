export default function Card ({id, onClick}) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/${id}.png`

    
    return (
        <div onClick={() => onClick(id)} className="card">
            <img src={url} alt="" height=""/>
        </div>
    )
}