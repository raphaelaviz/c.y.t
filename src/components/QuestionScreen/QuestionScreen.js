import React from 'react';
import './QuestionScreen.css';


// This component is activated by a few interactions in the game, and
// displays a question screen with 2 buttons. The button texts are passed
// as arguments in the displayQuestionScreen function.


const QuestionScreen = ({ show, options, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="questionScreen">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            option.onClick();
            onClose();
          }}
          className="questionScreenButton"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default QuestionScreen;
