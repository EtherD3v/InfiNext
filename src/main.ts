export {};

const playBoard: HTMLElement | null = document.querySelector(".play-board");
const scoreElement: HTMLElement | null = document.querySelector(".score");
const highScoreElement: HTMLElement | null = document.querySelector(".high-score");
const controls: NodeListOf<HTMLElement> = document.querySelectorAll(".controls i");

let gameOver: boolean = false;
let foodX: number, foodY: number;
let snakeX: number = 5, snakeY: number = 5;
let velocityX: number = 0, velocityY: number = 0;
let snakeBody: number[][] = [];
let setIntervalId: NodeJS.Timeout | null;
let score: number = 0;

// Getting high score from the local storage
let highScore: number | string = localStorage.getItem("high-score") || 0;
if (highScoreElement) highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = (): void => {
    // Passing a random 1 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
};

const handleGameOver = (): void => {
    // Clearing the timer and reloading the page on game over
    if (setIntervalId) clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
};

const changeDirection = (e: KeyboardEvent): void => {
    // Changing velocity value based on key press
    if (e.key === "ArrowUp" && velocityY !== 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
};

// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection(new KeyboardEvent("keyup", { key: (button as HTMLElement).dataset.key || "" }))));

const initGame = (): void => {
    if (gameOver) return handleGameOver();
    let html: string = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Checking if the snake hit the food
    if (snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
        score++; // increment score by 1
        highScore = score >= +highScore ? score : +highScore;
        localStorage.setItem("high-score", highScore.toString());
        if (scoreElement) scoreElement.innerText = `Score: ${score}`;
        if (highScoreElement) highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // Shifting forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
	return;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    if (playBoard) playBoard.innerHTML = html;
};

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);

