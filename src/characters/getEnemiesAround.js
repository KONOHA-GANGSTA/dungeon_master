import { mapTypes } from "../constants/mapTypes";

export const getEnemiesAround = (character) => {
  const result = [];
  for (
    let i = character.currentPosition.y - 1;
    i <= character.currentPosition.y + 1;
    ++i
  ) {
    for (
      let j = character.currentPosition.x - 1;
      j <= character.currentPosition.x + 1;
      ++j
    ) {
      if (
        i >= 0 &&
        j >= 0 &&
        i < character.map.length &&
        j < character.map[0].length
      )
        if (character.map[i][j] === mapTypes.enemy) result.push({ x: j, y: i });
    }
  }
  if (result.length) return result;
  return null;
};
