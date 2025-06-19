// components/logic.ts

/**
 * Logic Management
 * D1 (19/06/2025) : feat : display logical messages
 
**/

let addedElement = null;

export function setLogic (cube: HTMLDivElement) : void {
  if (addedElement) addedElement.remove();

  const root: string[] = ['left', 'right', 'up', 'down'];
  const randOrder: string = root[Math.floor(Math.random() * root.length)];
  
  const newElement = document.createElement('div');
  newElement.textContent = randOrder;

  const eStyle = newElement.style;
  eStyle.position = 'absolute';
  eStyle.width = '100%';
  eStyle.height = '80%';
  eStyle.display = 'flex';
  eStyle.justifyContent = 'center'; 
  eStyle.alignItems = 'center';

  cube.appendChild(newElement);

  addedElement = newElement;
}
