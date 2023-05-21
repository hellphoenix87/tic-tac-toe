import React from 'react';

const Status = ({ winner, isXNext }) => {
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isXNext) {
    status = 'Next player: X';
  } else {
    status = 'Next player: O';
  }

  return <div className="status">{status}</div>;
};

export default Status;
