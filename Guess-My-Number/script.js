"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉Correct Number";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 7;
// document.querySelector(".guess").value = 7;

let randomNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = randomNumber;
const displayMessage = function (Message) {
  document.querySelector(".message").textContent = Message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number!!";
    displayMessage("⛔ No Number!!");
  } else {
    // when the player wins
    if (guess === randomNumber) {
      // document.querySelector(".message").textContent = "🎉Correct Number";
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
        // document.querySelector(".message").textContent =
        //   guess < randomNumber ? "Too Low!!" : "Too High!!";
        displayMessage(guess < randomNumber ? "Too Low!!" : "Too High!!");
      } else {
        // document.querySelector(".message").textContent =
        //   "You Lost the game!💥💥";
        displayMessage("You Lost the game!💥💥");
      }
      document.querySelector(".score").textContent--;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector(".number").textContent = randomNumber;
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // guess = 0;
});
