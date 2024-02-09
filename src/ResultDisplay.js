import React from 'react';

const ResultDisplay = ({ result }) => {
  const outcomeMessage = {
    Player: 'You win!',
    Computer: 'Computer wins!',
    Tie: 'It\'s a tie!',
  };

  return (
    <div className="result">
      <h2>{outcomeMessage[result.winner]}</h2>
      <p>
        You chose: {result.playerChoice}. Computer chose: {result.computerChoice}.
      </p>
    </div>
  );
};

export default ResultDisplay;
