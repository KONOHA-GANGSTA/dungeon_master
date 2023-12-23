import HERO from "../textures/tile-P.png";
import ENEMY from "../textures/tile-E.png";
import styles from "./styles.module.css";
import { mapTypes } from "../constants/mapTypes";

export const createCharacter = (type) => {
  const character = document.createElement("DIV");
  character.classList.add(styles.character);
  const skin = document.createElement("img");
  const health = document.createElement("div");
  health.classList.add(styles.health);
  const healthBar = document.createElement("div");
  healthBar.classList.add("HEALTHBAR");
  healthBar.classList.add(styles.healthBar);
  switch (type) {
    case mapTypes.enemy: {
      character.classList.add("ENEMY");
      health.classList.add(styles.enemy);
      healthBar.classList.add(styles.healthBar_enemy);
      skin.src = ENEMY;
      break;
    }
    case mapTypes.hero: {
      skin.src = HERO;
      health.classList.add(styles.hero);
      healthBar.classList.add(styles.healthBar_hero);
      character.id = "HERO";
      break;
    }
  }
  health.appendChild(healthBar);
  character.appendChild(health);
  character.appendChild(skin);
  return character;
};
