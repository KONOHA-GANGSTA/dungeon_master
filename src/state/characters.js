import { mapTypes } from "../constants/mapTypes";
import { pickupsMap } from "./pickups";

const generateCharactersMap = (map) => {
  let enemiesCount = 0;
  const charactersMap = map.map((row) => [...row]);
  while (enemiesCount != 10) {
    let y = Math.floor(Math.random() * map[0].length);
    let x = Math.floor(Math.random() * map.length);
    if (charactersMap[x][y] === mapTypes.empty) {
      charactersMap[x][y] = mapTypes.enemy;
      enemiesCount++;
    }
  }
  while (true) {
    let y = Math.floor(Math.random() * map[0].length);
    let x = Math.floor(Math.random() * map.length);
    if (charactersMap[x][y] === mapTypes.empty) {
      charactersMap[x][y] = mapTypes.hero;
      break;
    }
  }
  return charactersMap;
};

export const charactersMap = generateCharactersMap(pickupsMap);
