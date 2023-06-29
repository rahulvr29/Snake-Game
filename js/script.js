const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// get high score
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () => {
  // passing food position
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
}

// reloading game over
const handleGameOver = () => {
  clearInterval(setIntervalId);
  alert("Game Over! Press OK to replay...");
  location.reload();
}

const changeDirection = e => {
  // Changing velocity value based on key press
  if(e.key === "ArrowUp" && velocityY != 1) {
      velocityX = 0;
      velocityY = -1;
  } else if(e.key === "ArrowDown" && velocityY != -1) {
      velocityX = 0;
      velocityY = 1;
  } else if(e.key === "ArrowLeft" && velocityX != 1) {
      velocityX = -1;
      velocityY = 0;
  } else if(e.key === "ArrowRight" && velocityX != -1) {
      velocityX = 1;
      velocityY = 0;
  }
}