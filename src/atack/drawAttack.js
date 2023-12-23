import atackImg from "../textures/sweep.svg";
import styles from "./styles.module.css";

export const drawAttack = (character) => {
  const hit = document.createElement("div");
  hit.classList.add(styles.sweep);
  const sweep = document.createElement("img");
  sweep.src = atackImg;
  hit.appendChild(sweep);
  hit.style.top = character.currentPosition.y * 25 + "px";
  hit.style.left = (character.currentPosition.x - 1) * 25 + "px";
  document.querySelector(".field").appendChild(hit);
  setTimeout(() => {
    hit.classList.add(styles.rot);
  }, 0);
  hit.addEventListener("transitionend", (event) => event.target.remove());
};
