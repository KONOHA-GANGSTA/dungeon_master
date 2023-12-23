import { mapTypes } from "../constants/mapTypes";
import { createCharacter } from "./createCharacter";

export const drawCharacters = (map) => {
  const field = document.querySelector(".field");
  for (let i = 0; i < map.length; ++i)
    for (let j = 0; j < map[0].length; ++j) {
      if (map[i][j] === mapTypes.enemy || map[i][j] === mapTypes.hero) {
        let character = createCharacter(map[i][j]);
        character.style.top = `${i * 25}px`;
        character.style.left = `${j * 25}px`;
        field.appendChild(character);
      }
    }
};
