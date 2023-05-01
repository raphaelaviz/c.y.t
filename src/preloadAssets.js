import room1 from "./assets/images/rooms/room1.png";
import room2 from "./assets/images/rooms/room2.png";
import room3 from "./assets/images/rooms/room3.png";
import room3v2 from "./assets/images/rooms/room3v2.png";
import room4 from "./assets/images/rooms/room4.png";
import room5 from "./assets/images/rooms/room5.png";
import room6 from "./assets/images/rooms/room6.png";
import roomCyt from "./assets/images/rooms/roomCyt.png";
import journalScene from "./assets/images/rooms/journalScene.png";
import patternScene from "./assets/images/rooms/patternScene.png";
import ball from "./assets/images/items/ball.png";
import box from "./assets/images/items/box.png";
import triangle from "./assets/images/items/triangle.png";
import egg from "./assets/images/items/egg.png";
import cylinder from "./assets/images/items/cylinder.png";
import candle from "./assets/images/items/candle.png";
import key from "./assets/images/items/key.png";


import itemSlotIn from "./assets/sounds/itemSlotIn.wav";
import journalGrab from "./assets/sounds/journalGrab.wav";
import keyGrab from "./assets/sounds/keyGrab.ogg";
import lockedDoor from "./assets/sounds/lockedDoor.wav";
import lockedDrawer from "./assets/sounds/lockedDrawer.wav";
import openCurtains from "./assets/sounds/openCurtains.mp3";
import thoughtCollected from "./assets/sounds/thoughtCollected.ogg";
import thoughtCollected2 from "./assets/sounds/thoughtCollected2.ogg";
import thoughtCollected3 from "./assets/sounds/thoughtCollected3.ogg";
import thoughtCollected4 from "./assets/sounds/thoughtCollected4.ogg";
import thoughtCollected5 from "./assets/sounds/thoughtCollected5.ogg";
import unlockingDoor from "./assets/sounds/unlockingDoor.wav";

const roomImages = [
    room1,
    room2,
    room3,
    room3v2,
    room4,
    room5,
    room6,
    roomCyt,
    journalScene,
    patternScene,
    ball,
    box,
    triangle,
    egg,
    cylinder,
    candle,
    key
];

const soundFiles = [
  itemSlotIn,
  journalGrab,
  keyGrab,
  lockedDoor,
  lockedDrawer,
  openCurtains,
  thoughtCollected,
  thoughtCollected2,
  thoughtCollected3,
  thoughtCollected4,
  thoughtCollected5,
  unlockingDoor
];


export const preloadImages = () => {
  roomImages.forEach((img) => {
    const image = new Image();
    image.src = img;
  });
};


export const preloadSoundFiles = () => {
  soundFiles.forEach((sound) => {
    const audio = new Audio();
    audio.src = sound;
  });
};
