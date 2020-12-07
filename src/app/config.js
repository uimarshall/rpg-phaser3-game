import Phaser from 'phaser';
import BootScene from '../scenes/BootScene';
import WorldScene from '../scenes/WorldScene';

const config = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 320,
  height: 240,
  zoom: 2,
  // backgroundColor: 0x000000,
  /** pixelArt: true option; when set to true it will prevent the blur of the textures when scaled.
     * We will use it together with the zoom option to make the game scale.  */
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: [
    BootScene,
    WorldScene,
  ],
};


export default config;