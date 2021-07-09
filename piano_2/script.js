"use strict";
let satisfy = false;
let blackKeyIndex;
let whiteKeyIndex;
const WHITE_KEYS = [
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
];
const BLACK_KEYS = ["w", "e", "t", "y", "u", "z", "x", "c", "v", "b"];
const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");
let modal = document.querySelectorAll(".modal");
let sound = [...whiteKeys, ...blackKeys];
let ra;
let sou = new Array();
let j = 0;
let k = 0;
let l = 0;
const correct = document.querySelector(".crct");
const wrong = document.querySelector(".wrng");
let overlay = document.querySelector(".overlay");
const again = document.querySelector(".again");
const againWon = document.querySelector(".againWon");

const restart = document.querySelector(".restart");

document.querySelector(".start").classList.add("hidden");
for (let i = 0; i < 5; i++) {
  sou[i] = Math.floor(Math.random() * sound.length);
}

document.querySelector(".play").addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    playNote(sound[sou[i]], i);
    console.log(sound[sou[i]]);
  }
  setTimeout(() => {
    document.querySelector(".start").classList.remove("hidden");
  }, 15000);
  setTimeout(() => {
    document.querySelector(".listen").classList.add("hidden");
  }, 15000);
  setTimeout(() => {
    document.querySelector(".startplaying").classList.remove("hidden");
  }, 15000);
});

document.querySelector(".start").addEventListener("click", () => {
  satisfy = true;
});
function afterStart(key) {
  if (satisfy) {
    if (key === sound[sou[j]]) {
      correct.play();
      key.classList.add("active");
      satisfy = false;
      correct.addEventListener("ended", () => {
        key.classList.remove("active");
        satisfy = true;
        if (j === 5) {
          modal[1].classList.remove("hidden");
          overlay.classList.remove("hidden");
        }
      });

      j++;
    } else {
      k++;
      wrong.play();
      key.classList.add("active");
      satisfy = false;
      wrong.addEventListener("ended", () => {
        satisfy = true;
        key.classList.remove("active");
        if (k === 3) {
          modal[0].classList.remove("hidden");
          overlay.classList.remove("hidden");
        }
      });
    }
  }
}
keys.forEach((key) => {
  key.addEventListener("click", () => {
    afterStart(key);
  });
});
again.addEventListener("click", () => {
  modal[0].classList.add("hidden");
  overlay.classList.add("hidden");
  j = 0;
  k = 0;
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal[0].classList.add("hidden");
    overlay.classList.add("hidden");
    j = 0;
    k = 0;
  }
});
againWon.addEventListener("click", () => {
  modal[1].classList.add("hidden");
  overlay.classList.add("hidden");
  restartGame();
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal[1].classList.add("hidden");
    overlay.classList.add("hidden");
    j = 0;
    k = 0;
  }
});
function restartGame() {
  j = 0;
  k = 0;
  document.querySelector(".listen").classList.remove("hidden");
  document.querySelector(".start").classList.add("hidden");
  document.querySelector(".startplaying").classList.add("hidden");
  satisfy = false;
  for (let i = 0; i < 5; i++) {
    sou[i] = Math.floor(Math.random() * sound.length);
  }
}
restart.addEventListener("click", () => {
  restartGame();
});
let noteAudio;
function playNote(key, i) {
  setTimeout(() => {
    noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
  }, 3000 * i);
}
function playNotes(key) {
  correct.play();
  key.classList.add("active");
  noteAudio.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
