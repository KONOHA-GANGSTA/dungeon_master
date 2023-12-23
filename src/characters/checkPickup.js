import { mapTypes } from "../constants/mapTypes";
import { pickupsMap } from "../state/pickups";

export const checkPickup = ({ x, y }) => {
  const currrent = pickupsMap[y][x];
  switch (currrent) {
    case mapTypes.HP:
    case mapTypes.sword: {
      const cell =
        document.querySelector(".field").childNodes[
          y * pickupsMap[0].length + x
        ];
      cell.innerHTML = "";
      pickupsMap[y][x] = mapTypes.empty;
      return currrent;
    }
  }
  return null;
};
