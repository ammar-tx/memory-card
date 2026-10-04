import Card from "./card";

function CardGrid({cards, onCardClick}) {
    return ( <div className="grid">
        {cards.map(card => (
            <Card key={card.id} src={card.src} onClick={() => {onCardClick(card.id)}}></Card>
        ) )}       
    </div>
    );
}

export default CardGrid;