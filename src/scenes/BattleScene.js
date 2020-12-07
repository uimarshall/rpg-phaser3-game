
import Phaser, { Animations } from 'phaser';
class BattleScene extends Phaser.Scene {
    constructor() {
        super("BattleScene")
        
    }

    create(){
         // Run UI Scene at the same time
        this.scene.launch('UiScene');
        this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');
    }
}

export default BattleScene
