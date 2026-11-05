export default function Card({ card, handleCardClick }) {
  return (
    <button className="card" onClick={() => handleCardClick(card)}>
      <img src={card.image} alt={card.name}></img>
      <h3>{card.name}</h3>
    </button>
  );
}
