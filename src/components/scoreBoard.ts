export function updateScore(
  order: string,
  eventKey: string,
  score: number
): number {
  const board = document.querySelector<HTMLDivElement>("#score-board")!;
  if (eventKey == "Arrow" + order) {
    board.textContent = `${score} / X`;
    score++;
  }

  return score;
}
