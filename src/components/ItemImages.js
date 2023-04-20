import React from 'react';


// This component is responsible for rendering the images of items 
// that haven't been collected yet within the game grid.

// Iterates through the currentCells array to render each item not assigned as "collected".

const ItemImages = ({ currentCells }) => {
  return (


   <>
      {currentCells.map((cell, index) => {
        if (cell.item && !cell.collected) {
          return (
            <img
              key={index}
              src={cell.item.image}
              alt="item"
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                ...cell.item.position,
                ...cell.item.inGameSize,
              }}
            />
          );
        }
      })}
    </>
  );
};

export default ItemImages;
