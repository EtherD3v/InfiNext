// components/player.ts

/** Player Management
 * D1 (18/05/2025) : feat & chore => enable movement / restriction inside cube
**/

type ArrowKey = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight';

export function setupPlayer(player: HTMLDivElement): void {

  let top: number = 140, left: number = 140;

  const MIN_POS: number = 0, MAX_POS: number = 280;
  
  const events: Record<ArrowKey, number> = {

    'ArrowUp': -10,
    'ArrowDown': 10,
    'ArrowLeft': -10,
    'ArrowRight': 10,

  }

  const getDelta = (pos: number, eventKey: string): number => {

    const offset: number = events[eventKey as ArrowKey] ?? 0;
    return pos + offset >= MIN_POS && pos + offset <= MAX_POS ? offset : 0;

  }

  document.addEventListener('keydown', (event: KeyboardEvent) => {

    const eventKey = event.key;

    top += (eventKey === 'ArrowUp' || eventKey === 'ArrowDown') ? getDelta(top, eventKey) : 0;
    left += (eventKey === 'ArrowLeft' || eventKey === 'ArrowRight') ? getDelta(left, eventKey) : 0;

    player.style.top = `${top}px`;
    player.style.left = `${left}px`;

  });
}

