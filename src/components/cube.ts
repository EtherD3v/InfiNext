// components/logic.ts

/**
 * Logic Management
 * D1 (19/06/2025) : feat : display logical messages
 
**/

let addedElement: HTMLDivElement | null = null;

function displayOrder(cube: HTMLDivElement): string {
  if (addedElement) addedElement.remove();

  const root: string[] = ["Up", "Down", "Left", "Right"];
  const randOrder: string = root[Math.floor(Math.random() * root.length)];

  const newElement = document.createElement("div");
  newElement.textContent = randOrder.toUpperCase();

  const eStyle = newElement.style;
  eStyle.position = "absolute";
  eStyle.width = "100%";
  eStyle.height = "100%";
  eStyle.display = "flex";
  eStyle.justifyContent = "center";
  eStyle.alignItems = "center";
  eStyle.fontSize = "1.4rem";
  eStyle.letterSpacing = ".1rem";
  eStyle.fontWeight = "bold";
  eStyle.transform = "translate(-2.5rem, -2.5rem) rotateZ(-45deg)";
  eStyle.color = "#000";

  cube.appendChild(newElement);

  addedElement = newElement;

  return randOrder;
}

export { displayOrder };
