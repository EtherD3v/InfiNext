// Function to generate random color
function randomColor() {
  return '#' + Math.random().toString(16).substr(2, 6);
}

// Display random color
function displayColor() {
  var colorDisplay = document.getElementById("colorDisplay");
  colorDisplay.style.backgroundColor = randomColor();
}

// Check if guess is correct
function checkGuess() {
  var colorDisplay = document.getElementById("colorDisplay");
  var guessedColor = document.getElementById("colorInput").value.toLowerCase();
  var actualColor = colorDisplay.style.backgroundColor;
  if (guessedColor === actualColor) {
    setMessage("Correct! 🎉", "green");
  } else {
    setMessage("Incorrect! Try again.", "red");
  }
}

// Set message
function setMessage(msg, color) {
  var message = document.getElementById("message");
  message.textContent = msg;
  message.style.color = color;
}

// Initialize game
function initGame() {
  displayColor();
}

// Run initGame when page loads
window.onload = initGame;

