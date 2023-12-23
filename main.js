import { drawField } from "./src/field/field";
import { pickupsMap } from "./src/state/pickups";
import { map } from "./src/state/map";
import "./style.css";
import { drawPickups } from "./src/pickups/drawPickups";
import { drawCharacters } from "./src/characters/characters";
import { charactersMap } from "./src/state/characters";
import { initHero } from "./src/hero/hero";
import { initEnemies } from "./src/enemies/enemies";

document.querySelector("#app").innerHTML = `
<h1>DUNGEON MASTER</h1>
<div class="field-box">
  <div class="field"></div>
  <div id="MODAL">
  <span></span>
  <form>
  <button id="RESTART">RESTART</button>
  </form>
  </div>
</div>
`;

drawField(map);
drawPickups(pickupsMap);
drawCharacters(charactersMap);
export const hero = initHero();
export const enemies = initEnemies();

window.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "r" || event.key.toLowerCase() === "к")
    document.getElementById("RESTART").click();
});
