import React, { useState, useEffect } from 'react';
import ChoiceButton from './ChoiceButton';
import ResultDisplay from './ResultDisplay';
import { FaRegHandRock,FaRegHandPaper,FaRegHandScissors } from "react-icons/fa";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (playerChoice && !isWaiting) {
      setIsWaiting(true);
      setTimeout(() => {
        const computerChoice = generateComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        setResult({ winner, playerChoice, computerChoice });
        setIsWaiting(false);
      }, 1500);
    }
  }, [playerChoice]);

  const handleChoiceClick = (choice) => {
    setPlayerChoice(choice);
  };

  const handleResetClick = () => {
    setPlayerChoice(null);
    setResult(null);
  };

  const generateComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    // Bias computer choice slightly towards winning (optional)
    const biasedIndex = Math.floor(Math.random() * 2) + randomIndex; // +2 chance for win
    return choices[biasedIndex % choices.length];
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      return 'Tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'Player';
    } else {
      return 'Computer';
    }
  };

  return (
    <div className="App">
      <h1>Rock-Paper-Scissors</h1>
      <div className="choices">
        <ChoiceButton
          choice="rock"
          icon={<FaRegHandRock />}
          onClick={handleChoiceClick}
          disabled={isWaiting}
        />
        <ChoiceButton
          choice="paper"
          icon={<FaRegHandPaper />}
          onClick={handleChoiceClick}
          disabled={isWaiting}
        />
        <ChoiceButton
          choice="scissors"
          icon={<FaRegHandScissors />}
          onClick={handleChoiceClick}
          disabled={isWaiting}
        />
      </div>
      {result && <ResultDisplay result={result} />}
      <button onClick={handleResetClick} disabled={isWaiting}>
        Reset Game
      </button>
    </div>
  );
};

export default App;