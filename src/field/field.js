import { createTile } from "../tile/tile";
import styles from "./styles.module.css";

export const drawField = (map) => {
  const field = document.querySelector(".field");
  field.innerHTML = "";
  field.classList.add(styles.root);
  for (let row of map)
    for (let tile of row) field.appendChild(createTile(tile));
};
