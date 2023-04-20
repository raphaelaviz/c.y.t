import React from 'react';
import './Inventory.css';

// This components creates the game's Inventory: an array of 8 slots (divs)
// that get filled as the player clicks on the item's images.

const Inventory = ({ items }) => {
  const inventorySlots = Array.from({ length: 8 }, (_, index) => {
    const item = items[index];

    return (
      <div
        key={index}
        className={`inventorySlot${item ? ' itemSlot' : ''}`}
        style={{
          backgroundImage: item ? `url(${item.image})` : 'none',
        }}
      />
    );
  });

  return <div className="inventory">{inventorySlots}</div>;
};

export default Inventory;
