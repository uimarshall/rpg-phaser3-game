import Phaser from 'phaser';


class WorldScene extends Phaser.Scene {
  // constructor fn super helps Scene1 to inherit all d features of Phaser.Scene
  constructor() {
    super('WorldScene');// 'WorldScene' will be the identifier for this 'scene1'
  }


  preload() {


  }

  create() {
    //  create our world scene with the map we have loaded into memory in BootScene.
    // this.map = this.add.tilemap(0, 0, config.width, config.height, 'map');
    this.map = this.make.tilemap({ key: 'map' });
    this.tiles = this.map.addTilesetImage('spritesheet', 'tiles');

    this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0);
    this.obstacles = this.map.createStaticLayer('Obstacles', this.tiles, 0, 0);
    this.obstacles.setCollisionByExclusion([-1]);
  }
}

export default WorldScene;