import styles from "./styles.module.css";
import { MODAL_VARIANTS } from "./variants";

export const showModal = (text, variant) => {
  const modal = document.getElementById("MODAL");
//   document.querySelector(".field").style.fil
  const span = modal.querySelector("SPAN");
  span.innerText = text;
  if (variant === MODAL_VARIANTS.win) span.classList.add(styles.win);
  else span.classList.add(styles.lose);
  modal.style.top = "0";
};
