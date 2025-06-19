// components/player.ts

/** Player Management
 * D1 (18/05/2025) : feat/chore : enable movement & restrictions inside cube
 * D2 (20/05/2025) : feat(player) : add animation & restrict movement

**/

import { setLogic } from './logic.ts'
type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export function setupPlayer(): void {

  const player = document.querySelector<HTMLDivElement>('#theplayer');
  const cube = document.querySelector<HTMLDivElement>('#thecube');
  const events: Record<ArrowKey, number[]> = {

    ArrowUp: [0, -140],
    ArrowDown: [0, 140],
    ArrowLeft: [-140, 0],
    ArrowRight: [140, 0],

  }
  
  let isAnimated = null;

  document.addEventListener('keydown', (event: KeyboardEvent) => {

    const eventKey = event.key;
    isAnimated = events.hasOwnProperty(eventKey) ? true : false;
    
    if (isAnimated){
      player.style.setProperty('--move-x', `${events[eventKey][0]}px`);
      player.style.setProperty('--move-y', `${events[eventKey][1]}px`);
      player.classList.add('animate');
    

      player.addEventListener('animationend', () => {

        player.classList.remove('animate');

        if (isAnimated) setLogic(cube) 
        isAnimated = false;
      });
    } 
  });
}

