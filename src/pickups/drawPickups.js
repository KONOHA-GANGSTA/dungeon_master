import { mapTypes } from "../constants/mapTypes";
import HP from "../textures/tile-HP.png";
import SWORD from "../textures/tile-SW.png";

export const drawPickups = (map) => {
  const fieldElements = Array.from(document.querySelector(".field").childNodes);
  let step = 0;
  for (let i = 0; i < map.length; ++i) {
    let row = fieldElements.slice(step, step + map[0].length);
    step += map[0].length;
    for (let j = 0; j < map[0].length; ++j)
      if (map[i][j] === mapTypes.HP || map[i][j] === mapTypes.sword) {
        let img = document.createElement("img");
        switch (map[i][j]) {
          case mapTypes.HP: {
            img.src = HP;
            break;
          }
          case mapTypes.sword: {
            img.src = SWORD;
            break;
          }
        }
        row[j].appendChild(img);
      }
  }
};
