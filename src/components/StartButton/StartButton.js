import React from 'react';
import './StartButton.css';


// A simple button component 

const StartButton = ({ startGame, showButton }) => {
  return (
    <button
      onClick={startGame}
      className="startButton"
      style={{ display: showButton ? 'block' : 'none' }}
    >
      START
    </button>
  );
};

export default StartButton;
