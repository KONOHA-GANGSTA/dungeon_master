import { DIRECTIONS } from "../constants/directions";
import { mapTypes } from "../constants/mapTypes";
import { getNextMove } from "./getNextMove";

export const moveCharacter = (direction, character) => {
  const nextMove = getNextMove(direction, character.currentPosition);
  character.map[nextMove.y][nextMove.x] =
    character.map[character.currentPosition.y][character.currentPosition.x];
  character.map[character.currentPosition.y][character.currentPosition.x] =
    mapTypes.empty;
  character.currentPosition = nextMove;
  switch (direction) {
    case DIRECTIONS.up: {
      character.body.style.top = `${
        +character.body.style.top.slice(0, -2) - 25
      }px`;
      break;
    }
    case DIRECTIONS.down: {
      character.body.style.top = `${
        +character.body.style.top.slice(0, -2) + 25
      }px`;
      break;
    }
    case DIRECTIONS.left: {
      character.body.style.left = `${
        +character.body.style.left.slice(0, -2) - 25
      }px`;
      character.body.querySelector("img").style.transform = "scaleX(-1)";
      break;
    }
    case DIRECTIONS.right: {
      character.body.style.left = `${
        +character.body.style.left.slice(0, -2) + 25
      }px`;
      character.body.querySelector("img").style.transform = "scaleX(1)";
      break;
    }
  }
};
