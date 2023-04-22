import React from 'react';


// This component generates the game grid: an array of 4096 clickable divs

const GameGrid = ({ handleClick, activeCells }) => {
  const gameGrid = Array.from({ length: 4096 }, (_, index) => {
    const isActive = activeCells.some((cell) =>
      Array.isArray(cell.index) ? cell.index.includes(index) : cell.index === index
    );

    return (
      <div
        key={index}
        onClick={() => { handleClick(index) }}

        // The line is for my own use so I can see which cells are clickable when defining the interactions.

        //  style={isActive ? { backgroundColor: 'white' } : {}}
      />
    );
  });

  return (
    <>{gameGrid}</>
  );
};

export default GameGrid;
