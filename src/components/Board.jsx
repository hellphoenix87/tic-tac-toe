import React from 'react';

const Board = ({ squares, onClick }) => {
  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => onClick(index)}>
        {squares[index]}
      </button>
    );
  };

  return (
    <div className="board">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
};

export default Board;
