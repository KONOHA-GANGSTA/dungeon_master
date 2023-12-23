import { mapTypes } from "../constants/mapTypes";
import { getNextMove } from "./getNextMove";

export const canGo = (direction, character) => {
  const nextMove = getNextMove(direction, character.currentPosition);
  if (
    nextMove.x >= 0 &&
    nextMove.y >= 0 &&
    nextMove.x < character.map[0].length &&
    nextMove.y < character.map.length &&
    character.map[nextMove.y][nextMove.x] !== mapTypes.wall &&
    character.map[nextMove.y][nextMove.x] !== mapTypes.enemy &&
    character.map[nextMove.y][nextMove.x] !== mapTypes.hero
  )
    return true;
  return false;
};
