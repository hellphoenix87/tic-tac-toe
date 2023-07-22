import './App.css'

import React from 'react';
import Game from './components/Game';
import Header from './components/Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Game />
    </div>
  );
};

export default App;
