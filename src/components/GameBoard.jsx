// src/components/GameBoard.jsx
import React, { useState, useEffect } from "react";
import Card from "./Card";
import ScoreBoard from "./ScoreBoard";
import "../styles/GameBoard.css";

const GameBoard = () => {
  // State management
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // Fetch cards from API when component mounts
  useEffect(() => {
    fetchCards();
  }, []);

  // Function to fetch cards from API
  const fetchCards = async () => {
    try {
      // Example using Pokemon API
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      const cardData = data.results.map((pokemon, index) => ({
        id: index,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
        clicked: false,
      }));
      setCards(cardData);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  // Function to shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  // Function to handle card click
  const handleCardClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      // Game over - card was already clicked
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem("bestScore", score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      // Card wasn't clicked before
      setClickedCards([...clickedCards, cardId]);
      setScore(score + 1);
    }
    shuffleCards();
  };

  // Load best score from localStorage on component mount
  useEffect(() => {
    const savedBestScore = localStorage.getItem("bestScore");
    if (savedBestScore) {
      setBestScore(parseInt(savedBestScore));
    }
  }, []);

  return (
    <div className="game-board">
      <ScoreBoard currentScore={score} bestScore={bestScore} />
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            image={card.image}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
