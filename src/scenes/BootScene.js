import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  // constructor fn super helps Scene1 to inherit all d features of Phaser.Scene
  constructor() {
    super('BootScene');// 'bootGame' will be the identifier for this 'scene1'
  }

  //  BootScene(){
  //       Phaser.Scene.call(this, { key: 'BootScene' });
  //  }
  // Load the assets


  preload() {
    // map tiles
    this.load.image('tiles', 'src/assets/map/spritesheet.png');

    // map in json format
    this.load.tilemapTiledJSON('map', 'src/assets/map/map.json');

    // our two characters
    this.load.spritesheet('player', 'src/assets/images/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('dragonblue', 'src/assets/images/dragonblue.png');
    this.load.image('dragonorange', 'src/assets/images/dragonorrange.png');
  }

  //   Add Objects
  create() {
    this.scene.start('BattleScene');
  }
}


export default BootScene;