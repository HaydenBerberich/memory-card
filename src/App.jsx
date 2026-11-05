import { useEffect, useState } from "react";
import Gameboard from "./components/Gameboard.jsx";
import shuffleCards from "./utils/shuffleCards.js";

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleCardClick = (card) => {
    if (clickedCards.some((clickedCard) => clickedCard.id === card.id)) {
      setScore(0);
      setClickedCards([]);
      setScore(0);
    } else {
      setClickedCards([...clickedCards, card]);
      const newScore = score + 1;
      setScore(newScore);
      setHighScore(Math.max(newScore, highScore));
    }

    setCards(shuffleCards(cards));
  };

  useEffect(() => {
    const names = [
      "pikachu",
      "eevee",
      "charizard",
      "mewtwo",
      "ditto",
      "snorlax",
      "charmander",
      "lucario",
      "arceus",
      "squirtle",
      "lugia",
      "alakazam",
    ];

    (async function fetchPokemon() {
      async function getPokemonData(name) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        );
        const data = await response.json();

        return {
          name,
          id: data.id,
          image: data.sprites.other["official-artwork"].front_default,
        };
      }

      setCards(await Promise.all(names.map((name) => getPokemonData(name))));
    })();
  }, []);

  return (
    <div className="main">
      <h1>Pokemon Card Memory Game</h1>
      <div className="scores">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <p>Don't click the same Pokemon twice!</p>
      <Gameboard cards={cards} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;
