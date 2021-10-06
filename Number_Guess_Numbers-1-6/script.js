'use strict';

let secretNumber = Math.trunc(Math.random() * 6) + 1;

let score = 20;
let highscore = 0;

let guess_game = function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.message-2').textContent = '';

  if (guess >= 7) {
    document.querySelector('.number').textContent = '?';
    alert('Enter number between 1 and 6 only');
  } else {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No Number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';
      document.querySelector('.message-2').textContent =
        '👏 Continue the guess!';

      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      score += 1;

      document.querySelector('.score').textContent = score;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '🔼 High!';
      score -= 1;

      document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '🔽 Low!';

      score -= 1;

      document.querySelector('.score').textContent = score;
    }

    document.querySelector('.number').textContent = secretNumber;
    secretNumber = Math.trunc(Math.random() * 6) + 1;

    const again = function () {
      score = 20;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#138496';

      document.querySelector('.message').textContent = 'Game restarted';
      document.querySelector('.message').style.color = 'Game restarted';
      document.querySelector('.message-2').textContent = 'Start guessing...';

      document.querySelector('.number').textContent = '?';
    };

    document.querySelector('.again').addEventListener('click', again);

    if (score < 0) {
      document.querySelector('body').style.backgroundColor = '#c75643';
      document.querySelector('.score').textContent = 'Game Over';

      setTimeout(function () {
        alert('Game Over! Click Again to play again.');
      }, 10);
    }
  }
};

document.querySelector('.check').addEventListener('click', guess_game);
