import { DIRECTIONS } from "../constants/directions";

export const getNextMove = (direction, currentPosition) => {
  let nextMove = {};
  switch (direction) {
    case DIRECTIONS.up: {
      nextMove = { y: currentPosition.y - 1, x: currentPosition.x };
      break;
    }
    case DIRECTIONS.down: {
      nextMove = { y: currentPosition.y + 1, x: currentPosition.x };
      break;
    }
    case DIRECTIONS.left: {
      nextMove = { y: currentPosition.y, x: currentPosition.x - 1 };
      break;
    }
    case DIRECTIONS.right: {
      nextMove = { y: currentPosition.y, x: currentPosition.x + 1 };
      break;
    }
  }
  return nextMove;
};
