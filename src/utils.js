import room1 from './assets/images/rooms/room1.png';
import room2 from './assets/images/rooms/room2.png';
import room3 from './assets/images/rooms/room3.png';
import room3v2 from './assets/images/rooms/room3v2.png';
import room4 from './assets/images/rooms/room4.png';
import room5 from './assets/images/rooms/room5.png';
import room6 from './assets/images/rooms/room6.png';
import journalScene from './assets/images/rooms/journalScene.png';
import patternScene from './assets/images/rooms/patternScene.png.png';
import roomCyt from './assets/images/rooms/roomCyt.png';
import roomCytV2 from './assets/images/rooms/roomCytV2.png';
import roomCytV3 from './assets/images/rooms/roomCytV3.png';
import roomCytV4 from './assets/images/rooms/roomCytV4.png';
import roomCytV5 from './assets/images/rooms/roomCytV5.png';
import roomCytV6 from './assets/images/rooms/roomCytV6.png';
import roomCytV7 from './assets/images/rooms/roomCytV7.png';
import { clickableCellsOne } from './clickableCells';
import { clickableCellsTwo } from './clickableCells';
import { clickableCellsThree } from './clickableCells';
import { clickableCellsFour } from './clickableCells';
import { clickableCellsFive } from './clickableCells';
import { clickableCellsSix } from './clickableCells';
import { clickableCellsThreeV2 } from './clickableCells';
import { clickableCellsJournalScene } from './clickableCells';
import { clickableCellsPatternScene } from './clickableCells';
import { clickableCellsCyt } from './clickableCells';

// The loadRoom function changes the current room based on the roomID parameter,
// updating the grid's background image and the array of interactive cells accordingly.

export const loadRoom = (roomID, setGridStyle, setDisplayMessage) => {
    let roomImage, activeCells;
  
    switch (roomID) {
      case 1:
        roomImage = room1;
        activeCells = clickableCellsOne;
        break;
      case 2:
        roomImage = room2;
        activeCells = clickableCellsTwo;
        break;
      case 3:
        roomImage = room3;
        activeCells = clickableCellsThree;
        break;
      case '3v2':
        roomImage = room3v2;
        activeCells = clickableCellsThreeV2;
        break;  
      case 4:
        roomImage = room4;
        activeCells = clickableCellsFour;
        break;
      case 5:
        roomImage = room5;
        activeCells = clickableCellsFive;
        break;
      case 6:
        roomImage = room6;
        activeCells = clickableCellsSix;
        break;
      case 'journalScene':
        roomImage = journalScene;
        activeCells = clickableCellsJournalScene;
        break;
      case 'patternScene':
        roomImage = patternScene;
        activeCells = clickableCellsPatternScene;
        break;              
      case 'cyt':
        roomImage = roomCyt;
        activeCells = clickableCellsCyt;
        break;
      case 'cytV2':
        roomImage = roomCytV2;
        activeCells = clickableCellsCyt;
        break;
      case 'cytV3':
        roomImage = roomCytV3;
        activeCells = clickableCellsCyt;
        break;
      case 'cytV4':
        roomImage = roomCytV4;
        activeCells = clickableCellsCyt;
        break;
      case 'cytV5':
        roomImage = roomCytV5;
        activeCells = clickableCellsCyt;
        break;
      case 'cytV6':
        roomImage = roomCytV6;
        activeCells = clickableCellsCyt;
        break;
      case 'cytV7':
        roomImage = roomCytV7;
        activeCells = clickableCellsCyt;
        break;        
      default:
        return;
    }
    setGridStyle(prevStyle => ({
      ...prevStyle,
      backgroundImage: `url(${roomImage})`,
      activeCells: activeCells,
    }));
    setDisplayMessage(false); //By changing the room, any message that's currently being displayed is hidden
  };


/* The createClickableArea function helps me create large clickable areas without
 the need of passing every single cell index. By passing the first 3 parameters, we draw the lines
 of a square or rectangle like this:
 
  P1-----P3          P1 = firstRow
  |      |           P2 = lastRow
  |      |           P3 = rowWidth
  P2-----P3


 and the function then "fills" the whole area, assigning every cell within it with the
 respective action. The extraCells parameter accepts any number of extra cells that need to be assgined
 according to the shape or size of the desired area. */

 export const createClickableArea = (firstRow, lastRow, rowWidth, ...extraCells) => {
    const rowLength = 64;
    let indexes = [];
  
    for (let row = firstRow; row <= lastRow; row += rowLength) {
      for (let cell = row; cell < row + rowWidth; cell++) {
        indexes.push(cell);
      }
    }
    indexes.push(...extraCells);
    return indexes;
  };

// The playSound function  is a simple function to execute the sound files in the game.

export const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };
