
// UTILS
import { loadRoom, createClickableArea, playSound } from './utils';

//
import roomCytV2 from './assets/images/rooms/roomCytV2.png';
import roomCytV3 from './assets/images/rooms/roomCytV3.png';
import roomCytV4 from './assets/images/rooms/roomCytV4.png';
import roomCytV5 from './assets/images/rooms/roomCytV5.png';
import roomCytV6 from './assets/images/rooms/roomCytV6.png';
import endScreen from './assets/images/endScreen.png';

//SOUNDS
import keyGrab from './assets/sounds/keyGrab.ogg';
import thoughtCollected from './assets/sounds/thoughtCollected.ogg';
import thoughtCollected2 from './assets/sounds/thoughtCollected2.ogg';
import thoughtCollected3 from './assets/sounds/thoughtCollected3.ogg';
import thoughtCollected4 from './assets/sounds/thoughtCollected4.ogg';
import thoughtCollected5 from './assets/sounds/thoughtCollected5.ogg';
import itemSlotIn from './assets/sounds/itemSlotIn.wav';
import lockedDoor from './assets/sounds/lockedDoor.wav';
import lockedDrawer from './assets/sounds/lockedDrawer.wav';
import unlockingDoor from './assets/sounds/unlockingDoor.wav';
import journalGrab from './assets/sounds/journalGrab.wav';
import openCurtains from './assets/sounds/openCurtains.mp3';

// ITEMS 
import key from './assets/images/items/key.png';
import ball from './assets/images/items/ball.png'
import cylinder from './assets/images/items/cylinder.png';
import box from './assets/images/items/box.png';
import egg from './assets/images/items/egg.png';
import candle from './assets/images/items/candle.png';
import triangle from './assets/images/items/triangle.png';



// This file handles every interaction in the game. Each room has 
// its own array of objects defining which cells perform which actions.



/*******************************************************************************************************************************
 ****************                          ROOM 1
 *****************************************************************************************************************************/

 export const clickableCellsOne = [
  {
    index: createClickableArea(2051, 2179, 2),
    isUnlocked: false,
    action: function ({ setDisplayMessage, setGridStyle, inventoryItems, setInventoryItems }) {
      if (this.isUnlocked) {
        setTimeout(() => {
          loadRoom(2, setGridStyle, setDisplayMessage)}, 100)
      } else {
        const hasKey = inventoryItems.some(item => item.image === key);
        if (hasKey) {
          playSound(unlockingDoor);
          setTimeout(() => {
            loadRoom(2, setGridStyle, setDisplayMessage)}, 100)
          setInventoryItems(inventoryItems.filter(item => item.image !== key));
          this.isUnlocked = true;
        } else {
          playSound(lockedDoor);
          setDisplayMessage("The door is locked.");
        }
      }
    },
  },
  {
     index: createClickableArea(2763, 2891, 5),
     item: {
       image: box,
       position: { top: '387px', left: '100px' },
       inGameSize: { width: '43px', height: '36px' },
     },
     action: ({ setDisplayMessage, setInventoryItems }) => {
       setInventoryItems((prevItems) => [...prevItems, { image: box }]);
       playSound(thoughtCollected);
       setDisplayMessage("How much of what really defines me can be of my choosing? How active can I possibly be about my own development?")
     },
  },
  {
    index: [3999,4000,4063,4064], //roomChange
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(6, setGridStyle, setDisplayMessage)},100) 
  },
  },
  {
    index: [2937,2999,3000,3001,3002,3003,3004,3062,3063,3064,3065, 3066,3067,3128,3129,3130], //roomChange
    action: ({ setGridStyle, setDisplayMessage }) => {
      playSound(journalGrab);
      setTimeout(() => {
        loadRoom('journalScene', setGridStyle, setDisplayMessage)},100) 
  },
  },
  
];

let isCurtainsOpen = false;

/*******************************************************************************************************************************
 ****************                          ROOM 2
 *****************************************************************************************************************************/
  export const clickableCellsTwo = [
    
    {
      index: 10,
      action: ({ setDisplayMessage }) => {
        setDisplayMessage('Message 2');
      },
    },
    {
      index: createClickableArea(920, 3288, 16), // roomChange
      action: ({ setGridStyle, setDisplayMessage }) => {
        setTimeout(() => {
          loadRoom(5, setGridStyle, setDisplayMessage)},100)
      },
    },
    {
      index: createClickableArea(1924, 2116, 2), //roomChange
      action: ({ setGridStyle, setDisplayMessage }) => {
        setTimeout(() => {
          loadRoom(isCurtainsOpen ? '3v2' : 3, setGridStyle, setDisplayMessage)},100)
        
      },
    },
    {
      index: [2108,2109,2172,2173], //roomChange
      action: ({ setGridStyle, setDisplayMessage }) => {
        setTimeout(() => {
          loadRoom(1, setGridStyle, setDisplayMessage)},100)
      },
    },
  ]
/*******************************************************************************************************************************
 ****************                          ROOM 3
 *****************************************************************************************************************************/
  let isChoiceMade = false;
  export const clickableCellsThree = [
    {
      index: createClickableArea(987,1819,9), //Open Curtains
      action: ({ setGridStyle,setDisplayMessage }) => {
        playSound(openCurtains);
        setTimeout(() => {
          loadRoom('3v2', setGridStyle, setDisplayMessage)},100)
      isCurtainsOpen = true;
      },
    },
    {
      index: createClickableArea(1774, 2030, 14),
      action: ({ setDisplayMessage, displayQuestionScreen }) => {
        setDisplayMessage('<em>"You can sing sweet and get the song sung, but to get to the third dimension you have to sing it rough, hurt the tune a little. Put enough strength to it that the notes slip. Then something else happens. The song gets large." </em>- Tess Gallagher');
        if (!isChoiceMade) {
          setTimeout(() => {
            displayQuestionScreen(
              'Ahm...ok?',
              'NARRATOR: "You walk away, never to think about those lines again."',
              'That\'s sort of deep...',
              '...why do I find that deep? I don\'t even know what that means but somehow it\'s like those lines have...hidden levels with deeper meanings that I can\' fully grasp and make actual use at the moment but it doesn\'t matter because tomorrow or some other day I\'ll stumble upon this poem again and I\'ll prob...<br><br>NARRATOR: "You lose conscious track of your thoughts but, dude, behind the curtains nothing is ever lost. Nothing. Get it?"'
            );
          }, 5800);
          isChoiceMade = true;
        }
      },
    },
    {
      index: [1984,1985,2048,2049],
      action: ({ setGridStyle, setDisplayMessage }) => {
        setTimeout(() => {
          loadRoom(4, setGridStyle, setDisplayMessage)},100)
      },
    },
    {
      index: [2046,2047,2110,2111],
      action: ({ setGridStyle, setDisplayMessage }) => {
        setTimeout(() => {
          loadRoom(2, setGridStyle, setDisplayMessage)},100)
      },
    },
  ]
/*******************************************************************************************************************************
 ****************                          ROOM 3 OPEN CURTAINS
 *****************************************************************************************************************************/

 export const clickableCellsThreeV2 = [
  {
    index: createClickableArea(990,1182,4,927,928),
    item: {
      image: egg,
      position: { top: '125px', left: '264px' },
      inGameSize: { width: '55px', height: '55px' },
    },
    action: ({ setDisplayMessage, setInventoryItems }) => {
      setInventoryItems((prevItems) => [...prevItems, { image: egg }]);
      playSound(thoughtCollected2);
      setDisplayMessage('Sun setting, leaves falling, cat staring at a tree for who knows how long. A gecko hid in a hole, and a spider even died, just now, right before my eyes. At all times, there\'s so much happening whether I\'m paying attention or not.')
    },
 },
 {
  index: createClickableArea(1774, 2030, 14),
  action: ({ setDisplayMessage, displayQuestionScreen }) => {
    setDisplayMessage('<em>"You can sing sweet and get the song sung, but to get to the third dimension you have to sing it rough, hurt the tune a little. Put enough strength to it that the notes slip. Then something else happens. The song gets large." </em>- Tess Gallagher');
    if (!isChoiceMade) {
      setTimeout(() => {
        displayQuestionScreen(
          'Ahm...ok?',
          'NARRATOR: "You walk away, never to think about those lines again."',
          'That\'s sort of deep...',
          '...why do I find that deep? I don\'t even know what that means but somehow it\'s like those lines have...hidden levels with deeper meanings that I can\' fully grasp and make actual use at the moment but it doesn\'t matter because tomorrow or some other day I\'ll stumble upon this poem again and I\'ll prob...<br><br>NARRATOR: "You lose conscious track of your thoughts but, dude, behind the curtains nothing is ever lost. Nothing. Get it?"'
        );
      }, 5800);
      isChoiceMade = true;
    }
  },
},
  {
    index: [1984,1985,2048,2049],
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(4, setGridStyle, setDisplayMessage)},100)
    },
  },
  {
    index: [2046,2047,2110,2111],
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(2, setGridStyle, setDisplayMessage)},100)
    },
  },
]
/*******************************************************************************************************************************
 ****************                          ROOM 4
 *****************************************************************************************************************************/
 export const clickableCellsFour = [
  
  {
    index: [2110,2111,2174,2175], //room change
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(isCurtainsOpen ? '3v2' : 3, setGridStyle, setDisplayMessage)},100)
    },
  },
  {
    index: createClickableArea(1994, 2186, 13,2250,2251,2252,2253,2254,2255,2256,2257,1938,1939,1940,1941,1942), //Radio
    action: ({ setDisplayMessage }) => {
      setDisplayMessage('<em>♪♪ Every thought felt as true or allowed to be accepted as true by your conscious mind take roots in your subconscious. Blossoms sooner or later into an act and bears its own fruit ♪♪</em>');
    },
  },
  {
    index: createClickableArea(3188, 3380, 3), //cylinder
    item: {
      image: cylinder,
      position: { top: '437px', left: '460px' },
      inGameSize: { width: '50px', height: '50px' },
    },
    action: ({ setDisplayMessage, setInventoryItems, displayQuestionScreen }) => {
      setInventoryItems((prevItems) => [...prevItems, { image: cylinder }]);
      playSound(thoughtCollected3);
      setDisplayMessage('Everytime I lay down to sleep the world barges in into my room, into my bed, into my head. Question is, what side of it do I entertain before I fall asleep?')
      setTimeout(() => {
        displayQuestionScreen(
        'The good side.',
        'NARRATOR: *sighs in empathetic joy, probably smiling*',
        'Can\'t help but listen to the bad side.',
        'NARRATOR: "Can\'t blame you. War, famine, police brutality, people who chew with their mouths open...I mean C\'MON!"')
      }, 4000);
    },
  },
  {
    index: createClickableArea(1257, 1705, 8), //room change
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom('patternScene', setGridStyle, setDisplayMessage)},100)
    },
  },
]
/*******************************************************************************************************************************
 ****************                          ROOM 5
 *****************************************************************************************************************************/
 export const clickableCellsFive = [
  {
    index: [3999,4000,4063,4064],
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(2, setGridStyle, setDisplayMessage)},100)
    },
  },
  {
    index: createClickableArea(1310, 1502, 4),
    item: {
      image: ball,
      position: { top: '174px', left: '268px' },
      inGameSize: { width: '45px', height: '46px' },
    },
    action: ({ setDisplayMessage, setInventoryItems }) => {
      setInventoryItems((prevItems) => [...prevItems, { image: ball }]);
      playSound(thoughtCollected4);
      setDisplayMessage('It\'s like everytime I really look myself in the mirror I see a new wrinkle. Time\'s been passing even faster lately. How can I slow it down a little?')
    },
  },
  {
    index: createClickableArea(1330, 2418, 7),
    action: ({ setDisplayMessage }) => {
      setDisplayMessage('Yeah, I know. Don\'t even ask, ok?');
    }
  },
  {
    index: createClickableArea(2842, 3290, 13),
    action: () => {
      playSound(lockedDrawer);
    },
  
  },
]

const deliveredItems = [];

/*******************************************************************************************************************************
 ****************                          ROOM 6
 *****************************************************************************************************************************/
export const clickableCellsSix = [
    
  {
    index: createClickableArea(2996, 3124, 8),
    action: () => {
      playSound(lockedDrawer);
    },
  
  },
  {
    index: createClickableArea(1808, 2256, 1),
    action: ({ setDisplayMessage }) => {
      setDisplayMessage('"Collect Your Thoughts Volume 1, by Holden Pencil"');
    },
  },
  {
    index: createClickableArea(1810, 2258, 1),
    action: ({ setDisplayMessage }) => {
      setDisplayMessage('"Collect Your Thoughts Volume 2, by Holden Pencil"');
    },
  },
  {
    index: createClickableArea(1812, 2260, 1),
    action: ({ setDisplayMessage }) => {
      setDisplayMessage('"Collect Your Thoughts Volume 3, by Holden Pencil"');
    },
  },
  {
    index: createClickableArea(1815, 2263, 1),
    action: ({ setDisplayMessage }) => {
      setDisplayMessage('"Fifty Shades of Grrhm.." *cough cough*...');
    },
  },
  {
    index: createClickableArea(1309, 2141, 18),
    action: ({ setGridStyle, setDisplayMessage }) => {
      switch (deliveredItems.length) {
        case 1:
          loadRoom('cytV2', setGridStyle, setDisplayMessage);
          break;
        case 2:
          loadRoom('cytV3', setGridStyle, setDisplayMessage);
          break;
        case 3:
          loadRoom('cytV4', setGridStyle, setDisplayMessage);
          break;
        case 4:
          loadRoom('cytV5', setGridStyle, setDisplayMessage);
          break;
        case 5:
          loadRoom('cytV6', setGridStyle, setDisplayMessage);
          break;
        default:
          loadRoom('cyt', setGridStyle, setDisplayMessage);
      }
    },
  },
  {
    index: [3999,4000,4063,4064],
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(1, setGridStyle, setDisplayMessage)},100) 
  },
  },
  {
    index: [1271,1335,1399],
    item: {
      image: key,
      position: { top: '156px', left: '477px' },
    },
    action: ({ setInventoryItems }) => {
      setInventoryItems((prevItems) => [...prevItems, { image: key }]);
      playSound(keyGrab);
    },
  },
]

/*******************************************************************************************************************************
 ****************                          JOURNAL SCENE
 *****************************************************************************************************************************/
 export const clickableCellsJournalScene = [
{
  index: [3999,4000,4063,4064],
  action: ({ setGridStyle, setDisplayMessage }) => {
    setTimeout(() => {
      loadRoom(1, setGridStyle, setDisplayMessage)},100) 
  },
},
{
  index: createClickableArea(3542, 3670, 3, 3479, 3669),
  item: {
    image: triangle,
    position: { top: '484px', left: '189px' },
    inGameSize: { width: '45px', height: '46px' },
  },
  action: ({ setDisplayMessage, setInventoryItems }) => {
    setInventoryItems((prevItems) => [...prevItems, { image: triangle }]);
    playSound(thoughtCollected5);
    setDisplayMessage('What good does reading the news bring me? So much mind space involuntarily filled by someone strategically selecting what I should focus on...')
  },
},
]
/*******************************************************************************************************************************
 ****************                          PATTERN SCENE
 *****************************************************************************************************************************/
 export const clickableCellsPatternScene = [
  {
    index: createClickableArea(3224, 3416, 3),
    item: {
      image: candle,
      position: { top: '450px', left: '212px' },
      inGameSize: { width: '40px', height: '44px' },
    },
    action: ({ setDisplayMessage ,setInventoryItems }) => {
      setInventoryItems((prevItems) => [...prevItems, { image: candle }]);
      playSound(thoughtCollected);
      setDisplayMessage('As I rush through life ignoring the different layers of the experiences that inevitably shape me, my shadow looms larger. I\'m a mystery to myself more and more.')
    },
  },   
{
  index: [3999,4000,4063,4064],
  action: ({ setGridStyle, setDisplayMessage }) => {
    setTimeout(() => {
      loadRoom(4, setGridStyle, setDisplayMessage)},100)
  },
},
]
/*******************************************************************************************************************************
 ****************                          CYT ROOM
 *****************************************************************************************************************************/
 export const clickableCellsCyt = [
    
  {
    index: [3999,4000,4063,4064], //roomChange
    action: ({ setGridStyle, setDisplayMessage }) => {
      setTimeout(() => {
        loadRoom(6, setGridStyle, setDisplayMessage)},100)
    },
  },
  {
    index: createClickableArea(971, 1355, 5), //CYLINDER SLOT
    action: ({ inventoryItems, setInventoryItems, setGridStyle, setDisplayMessage }) => {
      const hasCylinder = inventoryItems.some(item => item.image === cylinder);
      if (hasCylinder) {
        playSound(itemSlotIn);
        setInventoryItems(inventoryItems.filter(item => item.image !== cylinder));
        deliveredItems.push(cylinder);
        loadRoom("cytV2", setGridStyle, setDisplayMessage);
      }
    },
  },
  {
    index: createClickableArea(2544, 2800, 5), //BALL SLOT
    action: ({ inventoryItems, setInventoryItems, setGridStyle, gridStyle, setDisplayMessage }) => {
      const hasBall = inventoryItems.some(item => item.image === ball);
      if (hasBall && gridStyle.backgroundImage === `url(${roomCytV2})`) {
        playSound(itemSlotIn);
        setInventoryItems(inventoryItems.filter(item => item.image !== ball));
        deliveredItems.push(ball);
        loadRoom("cytV3", setGridStyle, setDisplayMessage);
      }
    },
  },
  {
    index: createClickableArea(2507, 2763, 5), //CANDLE SLOT
    action: ({ inventoryItems, setInventoryItems, setGridStyle, gridStyle, setDisplayMessage }) => {
      const hasCandle = inventoryItems.some(item => item.image === candle);
      if (hasCandle && gridStyle.backgroundImage === `url(${roomCytV3})`) {
        playSound(itemSlotIn);
        setInventoryItems(inventoryItems.filter(item => item.image !== candle));
        deliveredItems.push(candle);
        loadRoom("cytV4", setGridStyle, setDisplayMessage);
      }
    },
  },
  {
    index: createClickableArea(1008, 1392, 6), //EGG SLOT
    action: ({ inventoryItems, setInventoryItems, setGridStyle, gridStyle, setDisplayMessage }) => {
      const hasEgg = inventoryItems.some(item => item.image === egg);
      if (hasEgg && gridStyle.backgroundImage === `url(${roomCytV4})`) {
        playSound(itemSlotIn);
        setInventoryItems(inventoryItems.filter(item => item.image !== egg));
        deliveredItems.push(egg);
        loadRoom("cytV5", setGridStyle, setDisplayMessage);
      }
    },
  },
  {
    index: createClickableArea(1803, 1995, 5), //BOX SLOT
    action: ({ inventoryItems, setInventoryItems, setGridStyle, gridStyle, setDisplayMessage }) => {
      const hasBox = inventoryItems.some(item => item.image === box);
      if (hasBox && gridStyle.backgroundImage === `url(${roomCytV5})`) {
        playSound(itemSlotIn);
        setInventoryItems(inventoryItems.filter(item => item.image !== box));
        deliveredItems.push(box);
        loadRoom("cytV6", setGridStyle, setDisplayMessage);
      }
    },
  },
  {
    index: createClickableArea(1905, 2097, 4, 2096, 2032, 1842), // TRIANGLE SLOT
    action: ({
      inventoryItems,
      setInventoryItems,
      setGridStyle,
      gridStyle,
      setDisplayMessage,
      setDisplayInventory,
      setFinalFade,
    }) => {
      const hasTriangle = inventoryItems.some(item => item.image === triangle);
      if (hasTriangle && gridStyle.backgroundImage === `url(${roomCytV6})`) {
        playSound(itemSlotIn);
        setInventoryItems(inventoryItems.filter(item => item.image !== triangle));
        deliveredItems.push(triangle);
        loadRoom("cytV7", setGridStyle, setDisplayMessage);
        setDisplayInventory(false);
        setFinalFade(1);
        setTimeout(() => {
          setGridStyle({
            ...gridStyle,
            backgroundImage: `url(${endScreen})`,
          });
          setFinalFade(0);
        }, 4000);
      }
    },
  }
  
 ]  