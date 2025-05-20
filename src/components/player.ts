// components/player.ts

/** Player Management
 * D1 (18/05/2025) : feat/chore : enable movement & restrictions inside cube
 * D2 (20/05/2025) : feat(player) : add animation & restrict movement

**/

type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export function setupPlayer(player: HTMLDivElement): void {

  const events: Record<ArrowKey, number[]> = {

    'ArrowUp': [0, -140],
    'ArrowDown': [0, 140],
    'ArrowLeft': [-140, 0],
    'ArrowRight': [140, 0],

  }

  document.addEventListener('keydown', (event: KeyboardEvent) => {

    const eventKey = event.key;

    player.style.setProperty('--move-x', `${events[eventKey][0]}px`);
    player.style.setProperty('--move-y', `${events[eventKey][1]}px`);
    player.classList.add('animate');

    player.addEventListener('animationend', () => {

      setTimeout(() => player.classList.remove('animate'), 500);
    
    });
  });
}

