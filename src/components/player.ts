// components/player.ts

/** Player Management
 * D1 (18/05/2025) : feat/chore(player) : enable movement & define cube limits
 * D2 (20/05/2025) : feat/chore(player) : restrict movement & add animation
 * D3 (10/08/2025) : fix(player) : forbid trigger during animation
 **/

import { displayOrder } from "./cube.ts";
import { updateScore } from "./scoreBoard.ts";

export function setupPlayer(): void {
  const player = document.querySelector<HTMLDivElement>("#theplayer")!;
  const cube = document.querySelector<HTMLDivElement>("#thecube")!;
  const events: Record<string, number[]> = {
    ArrowUp: [-140, -140],
    ArrowDown: [140, 140],
    ArrowLeft: [-140, 140],
    ArrowRight: [140, -140],
  };

  let isAnimated: boolean = false;
  let canAnimate: boolean | null = null;
  let order: string | null = null;
  let score: number | null = null;

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    const eventKey: string = event.key;
    canAnimate = Object.has(events, eventKey) ? true : false;

    if (canAnimate && !isAnimated) {
      player.style.setProperty("--move-x", `${events[eventKey][0]}px`);
      player.style.setProperty("--move-y", `${events[eventKey][1]}px`);
      player.classList.add("player");
      cube.classList.add("cube");

      isAnimated = true;

      player.addEventListener("animationend", () => {
        player.classList.remove("player");
        cube.classList.remove("cube");

        isAnimated = false;
      });

      setTimeout(() => {
        score = updateScore(order ?? " ", eventKey, score ?? 1);
        order = displayOrder(cube);
      }, 750);
    }
  });
}
