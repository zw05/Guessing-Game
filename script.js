let randomNum;
let lives = 10;

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const guessBtn = document.getElementById("submit-btn");
const gameDisplay = document.getElementById("game");
const hintText = document.getElementById("text");
let userGuess;
const userLife = document.getElementById("count");

function startGame() {
    gameDisplay.style.display = "flex";
    startBtn.style.display = "none";
    if (randomNum === undefined) {
        randomNum = Math.floor(Math.random() * 100) + 1;
    }
}
function checkGuess() {
    userGuess = parseInt(document.getElementById("guess-input").value);

    if (userGuess === randomNum) {
        hintText.innerText = "The Number is Correct!";
        guessBtn.style.display = "none";
        restartBtn.style.display = "inline-block";

    } else if (userGuess < randomNum) {
        hintText.innerText = "The Number is Higher";
        loseLife();
    } else if (userGuess > randomNum) {
        hintText.innerText = "The Number is Lower";
        loseLife();

    }
}

function restartGame() {
    lives = 10;
    randomNum = Math.floor(Math.random() * 100) + 1;

    userLife.innerText = lives;

    guessBtn.style.display = "inline-block";
    restartBtn.style.display = "none";

    hintText.innerText = "Try to guess a number from 1-100!"
}

function loseLife() {
    lives--;
    userLife.innerText = lives;

    if (lives === 0) {
        hintText.innerText = "You ran out of lives. Game over!";
        guessBtn.style.display = "none";
        restartBtn.style.display = "inline-block";
    }
}
