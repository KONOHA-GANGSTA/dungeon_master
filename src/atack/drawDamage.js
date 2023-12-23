import styles from "./styles.module.css";

export const drawDamage = (dmg, character) => {
  const box = document.createElement("div");
  box.classList.add(styles.box);
  const span = document.createElement("span");
  if (dmg > 0) span.innerText = `-${dmg}`;
  else {
    span.innerText = `+${-dmg}`;
    span.classList.add(styles.heal);
  }
  box.appendChild(span);
  box.style.top = (character.currentPosition.y - 1) * 25 + "px";
  box.style.left = character.currentPosition.x * 25 + "px";
  document.querySelector(".field").appendChild(box);
  setTimeout(() => {
    box.classList.add(styles.fly);
  }, 0);
  box.addEventListener("transitionend", (event) => event.target.remove());
};
