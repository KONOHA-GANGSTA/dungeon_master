import { hero } from "../../main";
import { canGo } from "../characters/canGo";
import { getAxisOfMovement } from "../characters/getAxisOfMovement";
import { isHeroAround } from "../characters/isHeroAround";
import { moveCharacter } from "../characters/moveCharacter";
import { AXES_OF_MOVEMENT, DIRECTIONS } from "../constants/directions";
import { mapTypes } from "../constants/mapTypes";
import { charactersMap } from "../state/characters";

export const initEnemies = () => {
  const map = charactersMap;
  const enemiesPositions = [];
  const enemiesDom = document.querySelectorAll(".ENEMY");
  for (let i = 0; i < map.length; ++i)
    for (let j = 0; j < map[0].length; ++j)
      if (map[i][j] === mapTypes.enemy) enemiesPositions.push({ x: j, y: i });

  const enemies = enemiesPositions.map((currentPosition, index) => {
    const body = enemiesDom[index];
    const healthBar = body.querySelector(".HEALTHBAR");
    return {
      health: 5,
      damage: 1,
      map: map,
      currentPosition: { ...currentPosition },
      body: body,
      healthBar: healthBar,
      initialAxisOfMovement: null,
      direction: true,

      getDamage: function (dmg) {
        this.health -= dmg;
        this.healthBar.style.width = `${(this.health / 5) * 100}%`;
        if (this.health <= 0) {
          body.remove();
          this.map[this.currentPosition.y][this.currentPosition.x] =
            mapTypes.empty;
          clearInterval(this.interval);
          clearInterval(this.moveInterval);
        }
      },
      attack: function () {
        if (!isHeroAround(this)) return;
        hero.getDamage();
      },
      startInterval: function () {
        this.interval = setInterval(() => {
          this.attack();
        }, 500);
      },

      up: function () {
        if (canGo(DIRECTIONS.up, this)) moveCharacter(DIRECTIONS.up, this);
        else this.direction = !this.direction;
      },
      down: function () {
        if (canGo(DIRECTIONS.down, this)) moveCharacter(DIRECTIONS.down, this);
        else this.direction = !this.direction;
      },
      left: function () {
        if (canGo(DIRECTIONS.left, this)) moveCharacter(DIRECTIONS.left, this);
        else this.direction = !this.direction;
      },
      right: function () {
        if (canGo(DIRECTIONS.right, this))
          moveCharacter(DIRECTIONS.right, this);
        else this.direction = !this.direction;
      },
      setInitialAxisOfMovement: function () {
        this.initialAxisOfMovement = getAxisOfMovement(this);
      },
      moveCallback: function () {
        switch (this.initialAxisOfMovement) {
          case AXES_OF_MOVEMENT.horizontal: {
            if (this.direction) this.right();
            else this.left();
            break;
          }
          case AXES_OF_MOVEMENT.vertical: {
            if (this.direction) this.up();
            else this.down();
            break;
          }
        }
      },

      startMoveInterval: function () {
        this.moveInterval = setInterval(() => {
          this.moveCallback();
        }, 600 + Math.floor(Math.random() * 400));
      },
    };
  });

  enemies.forEach((el) => {
    el.setInitialAxisOfMovement();
    el.startInterval();
    el.startMoveInterval();
  });
  return enemies;
};
