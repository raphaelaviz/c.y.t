import React, { useState, useEffect } from 'react';
import { clickableCellsOne } from '../clickableCells';
import Inventory from './Inventory/Inventory';
import QuestionScreen from './QuestionScreen/QuestionScreen';
import StartScreen from '../assets/images/startScreen.png';
import GameGrid from './GameGrid';
import StartButton from './StartButton/StartButton';
import MessageBalloon from './MessageBalloon/MessageBalloon';
import ItemImages from './ItemImages';
import './Game.css';

import room1 from "../assets/images/rooms/room1.png";
import room2 from "../assets/images/rooms/room2.png";
import room3 from "../assets/images/rooms/room3.png";
import room3v2 from "../assets/images/rooms/room3v2.png";
import room4 from "../assets/images/rooms/room4.png";
import room5 from "../assets/images/rooms/room5.png";
import room6 from "../assets/images/rooms/room6.png";
import roomCyt from "../assets/images/rooms/roomCyt.png";
import journalScene from "../assets/images/rooms/journalScene.png";
import patternScene from "../assets/images/rooms/patternScene.png";

const room1Img = new Image();
room1Img.src = room1;

const room2Img = new Image();
room2Img.src = room2;

const room3Img = new Image();
room3Img.src = room3;

const room3v2Img = new Image();
room3v2Img.src = room3v2;

const room4Img = new Image();
room4Img.src = room4;

const room5Img = new Image();
room5Img.src = room5;

const room6Img = new Image();
room6Img.src = room6;

const roomCytImg = new Image();
roomCytImg.src = roomCyt;

const journalSceneImg = new Image();
journalSceneImg.src = journalScene;

const patternSceneImg = new Image();
patternSceneImg.src = patternScene;


// This components acts as the main container for the game.

const Game = () => {
  // State variables
  const [showButton, setShowButton] = useState(true);
  const [currentCells, setCurrentCells] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [displayInventory, setDisplayInventory] = useState(false);
  const [roomFade, setRoomFade] = useState(0);
  const [finalFade, setFinalFade] = useState(0);
  const [showQuestionScreen, setShowQuestionScreen] = useState(false);
  const [questionScreenOptions, setQuestionScreenOptions] = useState([]);

  // Initial state for the grid. The last two properties are affected by changing rooms in the game.

  const [gridStyle, setGridStyle] = useState({
    display: 'grid',
    gridTemplateColumns: 'repeat(64, 1fr)',
    gridTemplateRows: 'repeat(64, 1fr)',
    width: '600px',
    height: '600px',
    backgroundColor: 'transparent',
    border: '1px solid black',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    backgroundImage: `url(${StartScreen})`,
    activeCells: [],
  });

// Function to display a question screen with 2 options for the player to choose.
// Also handles the subsequent result messages from the choice.

  const displayQuestionScreen = (optionOneText, resultMessageOne, optionTwoText, resultMessageTwo) => {
    setQuestionScreenOptions([
      {
        text: optionOneText,
        onClick: () => {
          setDisplayMessage(false)
          setDisplayMessage(resultMessageOne);
          setShowQuestionScreen(false);
        },
      },
      {
        text: optionTwoText,
        onClick: () => {
          setDisplayMessage(false)
          setDisplayMessage(resultMessageTwo);
          setShowQuestionScreen(false);
        },
      },
    ]);
    setShowQuestionScreen(true);
  };
  
  // Updates the currentCells property based on changes in gridStyle.activeCells

  useEffect(() => {
    setCurrentCells(gridStyle.activeCells);
  }, [gridStyle.activeCells]);


  // The handleClick function is the main "engine" of the game. Performing basically
  // every action in the game.

  const handleClick = (index) => {
    // This console.log is for my own use So I can easily check which cells must be assigned with actions.
    // console.log(index);
    
    // Compares the clicked index with the currently assigned/active cells, checking whether the assignment
    // was made via array or not and following through with the respective action.

    const clickedCell = currentCells.find((cell) =>
      Array.isArray(cell.index) ? cell.index.includes(index) : cell.index === index
    );
  
    if (clickedCell && clickedCell.action && !clickedCell.collected) {
      if (clickedCell.item) {
        clickedCell.collected = true;
      }
  
      clickedCell.action({
        gridStyle,
        setGridStyle,
        setDisplayMessage,
        displayQuestionScreen,
        setInventoryItems,
        inventoryItems,
        setRoomFade,
        setFinalFade,
        setDisplayInventory,
      });
    }
  };

// Closes message balloon  
const closeMessage = () => {
    setDisplayMessage(false);
  };


// The startGame function executes all the necessary actions to begin the game
// after the Start Button is pressed. It sets the initial changes in the
// gridStyle state variable, hides the Start Button, displays the Inventory, and
// shows the introductory messages.

const startGame = () => {
  Promise.all([
    room1Img,
    room2Img,
    room3Img,
    room3v2Img,
    room4Img,
    room5Img,
    room6Img,
    roomCytImg,
    journalSceneImg,
    patternSceneImg,
  ]).then(() => {
    setCurrentCells(clickableCellsOne);
    setGridStyle({
      ...gridStyle,
      backgroundImage: `url(${room1})`,
      activeCells: clickableCellsOne,
    });
    setShowButton(false);
    setDisplayInventory(true);
    setTimeout(() => {
      setDisplayMessage(
        "Another day. Will this one take me closer or further from what I really want?"
      );
    }, 1000);
    setTimeout(() => {
      displayQuestionScreen(
        "Closer",
        "Ok, but...what do I really want?",
        "Further",
        "Let's face it, today is very likely to not be any different."
      );
    }, 3000);
  });
};


// Rendering section

  return (
    <div className="gameContainer">
      <div>
        <div style={gridStyle}>
          <div className="roomFade" style={{ opacity: roomFade }}></div>
          <div className="finalFade" style={{ opacity: finalFade }}></div>
            <GameGrid
             handleClick={handleClick}
             currentCells={currentCells}
             activeCells={gridStyle.activeCells}
            />
            <ItemImages currentCells={currentCells}/>
            <StartButton
             startGame={startGame}
             showButton={showButton}
            />
            <MessageBalloon
             displayMessage={displayMessage}
             closeMessage={closeMessage}
            />
            <QuestionScreen
             show={showQuestionScreen}
             options={questionScreenOptions}
            onClose={() => setShowQuestionScreen(false)}
            />
          </div>
        </div>
        {displayInventory && <Inventory items={inventoryItems} />}
    </div>
  );
};
    
export default Game;