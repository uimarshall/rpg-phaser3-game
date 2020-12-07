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

  /* The first row creates a tileset image. The next two rows add the layers to the map.
*two layers – the first one is called ‘Grass’ and contains only grass tiles,
 * the second is ‘Obstacles’ and there are some trees on it.
 * The method setCollisionByExclusion makes all tiles except the ones send, available for collision detection.
 * Sending -1 in our case makes all tiles on this layer collidable. */
  preload() {
    // map tiles
    this.load.image('tiles', 'src/assets/map/spritesheet.png');

    // map in json format
    this.load.tilemapTiledJSON('map', 'src/assets/map/map.json');

    // our two characters
    this.load.spritesheet('player', 'src/assets/images/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
  }

  //   Add Objects
  create() {
    this.scene.start('WorldScene');
  }
}


export default BootScene;