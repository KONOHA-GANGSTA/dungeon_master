import { mapTypes } from "../constants/mapTypes";

export const isHeroAround = (character) => {
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
        if (character.map[i][j] === mapTypes.hero) return true;
    }
  }
  return false;
};
