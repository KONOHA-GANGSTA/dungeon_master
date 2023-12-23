import { mapTypes } from "../constants/mapTypes";
import { map } from "./map";

const generatePickupsMap = (map) => {
  let hpCount = 0;
  let swordsCount = 0;
  const pickupsMap = map.map((row) => [...row]);
  while (hpCount != 10) {
    let y = Math.floor(Math.random() * map[0].length);
    let x = Math.floor(Math.random() * map.length);
    if (pickupsMap[x][y] === mapTypes.empty) {
      pickupsMap[x][y] = mapTypes.HP;
      hpCount++;
    }
  }
  while (swordsCount != 2) {
    let y = Math.floor(Math.random() * map[0].length);
    let x = Math.floor(Math.random() * map.length);
    if (pickupsMap[x][y] === mapTypes.empty) {
      pickupsMap[x][y] = mapTypes.sword;
      swordsCount++;
    }
  }
  return pickupsMap;
};

export const pickupsMap = generatePickupsMap(map);
