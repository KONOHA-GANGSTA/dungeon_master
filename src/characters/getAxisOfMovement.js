import { AXES_OF_MOVEMENT, DIRECTIONS } from "../constants/directions";
import { canGo } from "./canGo";

export const getAxisOfMovement = (character) => {
  if (canGo(DIRECTIONS.up, character) || canGo(DIRECTIONS.down, character))
    return AXES_OF_MOVEMENT.vertical;
  else return AXES_OF_MOVEMENT.horizontal;
};
