import React, { useState } from 'react';
import Board from './Board';
import Status from './Status';

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [isXNext, setIsXNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const handleClick = (index) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const currentBoard = newHistory[newHistory.length - 1];
    const squares = [...currentBoard.squares];

    if (winner || squares[index]) {
      return;
    }

    squares[index] = isXNext ? 'X' : 'O';

    setHistory([...newHistory, { squares }]);
    setStepNumber(newHistory.length);
    setIsXNext(!isXNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXNext(step % 2 === 0);
  };

  const renderMoves = () => {
    return history.map((_step, move) => {
      const buttonText = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{buttonText}</button>
        </li>
      );
    });
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <Status winner={winner} isXNext={isXNext} />
        <div className="game-moves">
          <ol>{renderMoves()}</ol>
        </div>
      </div>
    </div>
  );
};
const calculateWinner = (squares) => {
const winningLines = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

for (let i = 0; i < winningLines.length; i++) {
const [a, b, c] = winningLines[i];
if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
return squares[a];
}
}

return null;
};

export default Game;
