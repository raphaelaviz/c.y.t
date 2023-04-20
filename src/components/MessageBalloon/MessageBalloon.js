import React from 'react';
import './MessageBalloon.css';

// This component is responsible for displaying the text messages in the game

const MessageBalloon = ({ displayMessage, closeMessage }) => {
  return (
    displayMessage && (
      <div className="balloonStyle">
        {/* dangerouslySetInnetHTML was used to apply an italic effect in some messages*/}
        <div dangerouslySetInnerHTML={{ __html: displayMessage }} />
        <button className="closeButtonStyle" onClick={closeMessage}>
          &times;
        </button>
      </div>
    )
  );
};

export default MessageBalloon;
