import Phaser from 'phaser';

class Unit extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    
    super(scene, x, y, texture, frame);
    this.type = type;
        this.maxHp = this.hp = hp;
        this.damage = damage; // default damage 
  }

  attack(target) {
        target.takeDamage(this.damage);      
    }

    takeDamage(damage) {
        this.hp -= damage;        
    }

  //   Prevents bullet from falling off
//   update() {
//     if (this.y < 32) {
//       this.destroy();
//     }
//   }
}

export default Unit;