import Card from "./Card.jsx";

export default function Gameboard({ cards, handleCardClick }) {
  return (
    <div className="gameboard">
      {cards.map((card) => {
        return (
          <Card key={card.id} card={card} handleCardClick={handleCardClick} />
        );
      })}
    </div>
  );
}
