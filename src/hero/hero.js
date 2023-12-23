import { enemies } from "../../main";
import { drawAttack } from "../atack/drawAttack";
import { canGo } from "../characters/canGo";
import { checkPickup } from "../characters/checkPickup";
import { getEnemiesAround } from "../characters/getEnemiesAround";
import { moveCharacter } from "../characters/moveCharacter";
import { DIRECTIONS } from "../constants/directions";
import { mapTypes } from "../constants/mapTypes";
import { showModal } from "../modal/modal";
import { MODAL_MESSAGES, MODAL_VARIANTS } from "../modal/variants";
import { charactersMap } from "../state/characters";

export const initHero = () => {
  const characterDom = document.querySelector("#HERO");
  const healthBar = characterDom.querySelector(".HEALTHBAR");
  const map = charactersMap;
  let currentPosition = {};
  for (let i = 0; i < map.length; ++i)
    for (let j = 0; j < map[0].length; ++j)
      if (map[i][j] === mapTypes.hero) currentPosition = { x: j, y: i };
  const hero = {
    health: 5,
    damage: 1,
    map: map,
    healthBar: healthBar,
    body: characterDom,
    currentPosition: currentPosition,

    heal: function () {
      if (this.health == 5) return;
      this.health += 1;
      this.healthBar.style.width = `${(this.health / 5) * 100}%`;
    },
    boost: function () {
      this.damage += 1;
    },
    checkIfPickUp: function () {
      const pickup = checkPickup(this.currentPosition);
      if (!pickup) return;
      switch (pickup) {
        case mapTypes.HP: {
          this.heal();
          break;
        }
        case mapTypes.sword: {
          this.boost();
          break;
        }
      }
    },

    up: function () {
      if (canGo(DIRECTIONS.up, this)) {
        moveCharacter(DIRECTIONS.up, this);
      } else {
        return;
      }
      this.checkIfPickUp();
    },
    down: function () {
      if (canGo(DIRECTIONS.down, this)) {
        moveCharacter(DIRECTIONS.down, this);
      } else {
        return;
      }
      this.checkIfPickUp();
    },
    left: function () {
      if (canGo(DIRECTIONS.left, this)) {
        moveCharacter(DIRECTIONS.left, this);
      } else {
        return;
      }
      this.checkIfPickUp();
    },
    right: function () {
      if (canGo(DIRECTIONS.right, this)) {
        moveCharacter(DIRECTIONS.right, this);
      } else {
        return;
      }
      this.checkIfPickUp();
    },
    attack: function () {
      // drawAttack(this);
      const enemiesPositions = getEnemiesAround(this);
      if (!enemiesPositions) return;
      const enemiesToAttack = enemiesPositions.map(({ x, y }) => {
        return enemies.find(
          ({ currentPosition }) =>
            currentPosition.x == x && currentPosition.y == y
        );
      });
      enemiesToAttack.forEach((enemy) => enemy.getDamage(this.damage));
      if (enemiesToAttack.some(({ health }) => health <= 0)) {
        const dead = enemies.reduce((acc, el, ind) => {
          if (el.health <= 0) acc.push(ind);
          return acc;
        }, []);
        dead.sort((a, b) => b - a);

        for (let index of dead) enemies.splice(index, 1);
      }
      if (enemies.length == 0)
        showModal(MODAL_MESSAGES.win, MODAL_VARIANTS.win);
    },
    getDamage: function () {
      this.health -= 1;
      this.healthBar.style.width = `${(this.health / 5) * 100}%`;
      if (this.health == 0) {
        this.body.remove();
        this.map[this.currentPosition.y][this.currentPosition.x] =
          mapTypes.empty;
        showModal(MODAL_MESSAGES.lose, MODAL_VARIANTS.lose);
      }
    },
  };

  window.addEventListener("keydown", (event) => {
    switch (event.key.toLowerCase()) {
      case "w":
      case "ц": {
        hero.up();
        break;
      }
      case "s":
      case "ы": {
        hero.down();
        break;
      }
      case "a":
      case "ф": {
        hero.left();
        break;
      }
      case "d":
      case "в": {
        hero.right();
        break;
      }
      case " ": {
        hero.attack();
        break;
      }
    }
  });
  return hero;
};
