var colors;
var pickedColor;
var mode;
var numSquares = 6;

//Score system
var gameRound = 1;
var gameRoundMax = 5;
var oneRoundScore = 0;
var score = 0;
var missPenalty = 10;  //show score will be 4 times (miss penalty = 40)
var missPenaltySum = 0;
var timePenalty = 1;   //show score will be 4 times (time penalty = 4 for each 3 sec)
var timePenaltySum = 0;
var progress = 150;

var penaltyTimer;
var progressTimer;

//View
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById('colorDisplay');
var scoreDisplay = document.getElementById('score');

var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//Sound 
var wrongSound = document.getElementById("wrongSound");
var correctSound = document.getElementById("correctSound");

//Progress bar (still testing)
var progressDisplay = document.querySelector("progress");

init();

function init() {
    gameRound = 1;
    oneRoundScore = 0;
    score = 0;
    scoreDisplay.textContent = score;
    scoreDisplay.style.display = "none";

    setSquaresListener();
    setButtonListener();
    newRound();
}

function newRound() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    setSquaresDisplay();
    messageDisplay.textContent = "";
    h1.style.background = "rgb(23,78,140)";

    messageDisplay.textContent = "Round: " + gameRound + " / " + gameRoundMax;
    oneRoundScore = numSquares * missPenalty - missPenalty;  //50
    progress = 150;
    missPenaltySum = 0;
    timePenaltySum = 0;

    //showScore();
    if (penaltyTimer || progressTimer) {
        clearInterval(penaltyTimer);
        clearInterval(progressTimer);
    }

    penaltyTimer = setInterval(invokeTimePenalty, 3000);
    progressTimer = setInterval(invokeTimeProgress, 100);
}
function invokeTimePenalty() {
    oneRoundScore -= timePenalty;
    timePenaltySum += timePenalty;  //debug
    //showScore();
}
function invokeTimeProgress() {
    progress -= 0.1;
    progressDisplay.setAttribute("value", progress);
}

function reset() {
    init();
}
function showScore() {
    scoreDisplay.textContent = score + " / +" + oneRoundScore;
    scoreDisplay.style.display = "inherit";
}
function debug() {
    var message = "Total score: " + score
        + "\nThis round remaining score: " + oneRoundScore
        + "\nThis round miss penalty: " + missPenaltySum
        + "\nThis round time penalty: " + timePenaltySum;
    console.log(message);
}
function squareListener() {
    var clickedColor = this.style.background;

    if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!!";
        resetBtn.textContent = "Replay";
        correctSound.play();
        changeAllSquaresColor(pickedColor);
        h1.style.background = clickedColor;
        if (oneRoundScore > 0) {
            score += oneRoundScore;
        }
        //showScore();        

        if (gameRound === gameRoundMax) {
            gameOver();
        } else {
            gameRound += 1;
            setTimeout(newRound, 1000);
        }
    } else {
        this.style.background = "#232323";
        wrongSound.play();
        //messageDisplay.textContent = "Try again";

        oneRoundScore -= missPenalty;
        missPenaltySum += missPenalty;  //debug
        //showScore();
    }
}
function setSquaresListener() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", squareListener);
    }
}
function gameOver() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", squareListener);
    }
    scoreDisplay.textContent = "Your score is " + score * 4;
    scoreDisplay.style.display = "inherit";
    messageDisplay.textContent = "Game Over";
}
function setSquaresDisplay(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.visibility = "hidden";
    }
    for (var i = 0; i < colors.length; i++) {
        setTimeout(setOneSquaresDisplay.bind(null, i), 500 + i * 200);
    }
}
function setOneSquaresDisplay(i) {
    squares[i].style.visibility = "visible";
    squares[i].style.background = colors[i];
}
function setButtonListener(color) {
    easyBtn.addEventListener("click", function () {
        mode = "easy";
        this.classList.add("selected");
        hardBtn.classList.remove("selected");
        numSquares = 3;
        init();
    });
    hardBtn.addEventListener("click", function () {
        mode = "hard";
        this.classList.add("selected");
        easyBtn.classList.remove("selected");
        numSquares = 6;
        init();
    });
    resetBtn.addEventListener("click", function () {
        init();
    });
}
function changeAllSquaresColor(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var pickedColor = Math.floor(Math.random() * colors.length);
    //pickedColor=0;  //fixed answer for debuging 
    return colors[pickedColor];
}
function generateRandomColors(number) {
    var colorArray = [];
    for (var i = 0; i < number; i++) {
        colorArray[i] = randomColor();
    }
    return colorArray;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256); //0-255
    var g = Math.floor(Math.random() * 256); //0-255
    var b = Math.floor(Math.random() * 256); //0-255
    var color = "rgb(" + r + ", " + g + ", " + b + ")";
    return color;
}
