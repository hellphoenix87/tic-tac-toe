import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Game from './components/Game';

const App = () => {
  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <Game />
    </div>
  );
};

export default App;
