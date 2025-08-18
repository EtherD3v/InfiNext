import "./styles/canvas.css";
import { setupPlayer } from "./components/player.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <div id="score-board">0 / X</div>

    <div id="thecube">
      <div id="theplayer"></div>
      
      <div class="portal"></div>
      <div class="portal"></div>
      <div class="portal"></div>
      <div class="portal"></div>
    </div> 
  </div>
`;

// Let's go !

setupPlayer();
