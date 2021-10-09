function dicing() {
    document.querySelector(".dice-row").classList.toggle("hidden");
    document.querySelector(".gif").classList.toggle("hidden");

    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    document.querySelectorAll(".dice img")[0].setAttribute("src", "https://raw.githubusercontent.com/thisisankit27/DiceRoll/master/images/dice" + randomNumber1 + ".png");
    document.querySelectorAll(".dice img")[1].setAttribute("src", "https://raw.githubusercontent.com/thisisankit27/DiceRoll/master/images/dice" + randomNumber2 + ".png");

    if (randomNumber1 == randomNumber2) {
        document.querySelector(".container-fluid h1").textContent = "Draw!";
    }
    else if (randomNumber1 > randomNumber2) {
        document.querySelector(".container-fluid h1").textContent = "🚩Player 1 Wins!";
    }
    else {
        document.querySelector(".container-fluid h1").textContent = "Player 2 Wins!🚩";
    }

    document.querySelector("button.button").textContent = "Roll";
    document.querySelector("button.button").setAttribute("onclick", "rolling()");
}

function rolling() {
    document.querySelector("button.button").innerHTML = "Dice";
    document.querySelector("h1").innerHTML = "Click to Dice";
    document.querySelector(".dice-row").classList.toggle("hidden");
    document.querySelector(".gif").classList.toggle("hidden");
    document.querySelector("button.button").setAttribute("onclick", "dicing()");
}