// Function to generate random color
function randomColor(): string {
  return '#' + Math.random().toString(16).substr(2, 6);
}

// Display random color
function displayColor(): void {
  const colorDisplay = document.getElementById("colorDisplay") as HTMLDivElement;
  colorDisplay.style.backgroundColor = randomColor();
}

// Check if guess is correct
function checkGuess(): void {
  const colorDisplay = document.getElementById("colorDisplay") as HTMLDivElement;
  const guessedColor = (document.getElementById("colorInput") as HTMLInputElement).value.toLowerCase();
  const actualColor = colorDisplay.style.backgroundColor;
  if (guessedColor === actualColor) {
    setMessage("Correct! 🎉", "green");
  } else {
    setMessage("Incorrect! Try again.", "red");
  }
}

// Set message
function setMessage(msg: string, color: string): void {
  const message = document.getElementById("message") as HTMLParagraphElement;
  message.textContent = msg;
  message.style.color = color;
}

// Initialize game
function initGame(): void {
  displayColor();
}

// Run initGame when page loads
window.onload = initGame;

