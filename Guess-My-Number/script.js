"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
const displayMessage = function (Message) {
  document.querySelector(".message").textContent = Message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    displayMessage("⛔ No Number!!");
  } else {
    // when the player wins
    if (guess === randomNumber) {
      displayMessage("🎉Correct Number");
      if (
        Number(document.querySelector(".highscore").textContent) <
        Number(document.querySelector(".score").textContent)
      ) {
        document.querySelector(".highscore").textContent =
          document.querySelector(".score").textContent;
      }
      document.querySelector(".number").textContent = randomNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";

      document.querySelector(".number").style.width = "30rem";

      //when guess is wrong
    } else if (guess !== randomNumber) {
      if (document.querySelector(".score").textContent > 1) {
        displayMessage(guess < randomNumber ? "Too Low!!" : "Too High!!");
      } else {
        displayMessage("You Lost the game!💥💥");
      }
      document.querySelector(".score").textContent--;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
