function Card({src, id, onClick}) {
    return <div className="card" onClick={onClick}>
        <img src={src} id={id}></img>
    </div>
}

export default Card;