// src/App.jsx
import React from 'react';
import GameBoard from './components/GameBoard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Card Game</h1>
      </header>
      <main>
        <GameBoard />
      </main>
    </div>
  );
}

export default App;