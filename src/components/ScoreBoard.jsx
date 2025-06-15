import React from "react";
import "../styles/ScoreBoard.css";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <div className="score-board">
      <div className="score-container">
        <div className="score-item">
          <h2>Current Score</h2>
          <p>{currentScore}</p>
        </div>
        <div className="score-item">
          <h2>Best Score</h2>
          <p>{bestScore}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
