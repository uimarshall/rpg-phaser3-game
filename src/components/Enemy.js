import Unit from './Unit';


class Enemy extends Unit {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame, type, hp, damage);
    this.type = type;
    this.maxHp = this.hp = hp;
    this.damage = damage; // default damage
  }
}

export default Enemy;