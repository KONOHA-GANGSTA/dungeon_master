import { mapTypes } from "../constants/mapTypes";
import styles from "./styles.module.css";

export const createTile = (type) => {
  const tile = document.createElement("div");
  tile.classList.add(styles.root);
  tile.classList.add(type === mapTypes.empty ? styles.empty : styles.wall);
  return tile;
};
