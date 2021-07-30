const ino = document.querySelectorAll('.canMove');
const inc = document.querySelectorAll('.cpuMove');
const button = document.querySelector('.button');
const button_1 = document.querySelector('.allIn');
const button_2 = document.querySelector('.allOut');
const button_3 = document.querySelector('.deal');
const stand = document.querySelector('.stand');
const double = document.querySelector('.double');
const hit = document.querySelector('.hit');
const cpu = document.querySelector('.cpu');
const cards = document.querySelector('.cards');
const coins = document.querySelector('.coins');
const betcoin = document.querySelectorAll('.betCoins');
const tops1 = document.querySelectorAll('.tops1');
const key = document.querySelectorAll('.key');
const bet = document.querySelector('.raise');
const down = document.querySelector('.down');
const score2 = document.querySelector('.score2');
const score1 = document.querySelector('.score1');
const won = document.querySelector('.won');
const lost = document.querySelector('.lost');
const draw = document.querySelector('.draw');
const start = document.querySelector('.Start');
const level = document.querySelector('.level');
const continuebut = document.querySelector('.continue');
const restart = document.querySelector('.reStart');
const help = document.querySelector('.help');
const overlay = document.querySelector('.overly');
const btnCloseModal = document.querySelector('.close-modal');




var money = 0;
var moneyDec = 16600;
var moneyInc = 16600;
let increase = 22;
let increase1 = 22;
let increase2 = 500;
let count = true;
let count1 = true;
let count2 = 0;
let count3 = 0;
let playerScore = 0;
let cpuScore = 0;
const Arr1 = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J'];
const Arr2 = ['H', 'D', 'S', 'C'];
let Arr3 = new Array();
let Arr4 = new Array();
let cou = 2;
let re;
let re2;
let re3;
let levels = 1;
for (let j = 0; j < ino.length; j++) {
  ino[j].style.paddingLeft = increase + 'px';
  increase = increase + 22;
}
for (let j = 0; j < inc.length; j++) {
  inc[j].style.paddingLeft = increase1 + 'px';
  increase1 = increase1 + 22;
}
increase1 = 22;

button_1.addEventListener('click', function () {
  count1 = false;
  if (count === true) {
    coins.classList.remove('coins');
    coins.classList.add('tops');
    count = false;
    button_3.classList.remove('hidden');
    button_2.classList.remove('hidden');
    button_1.classList.add('hidden');
  }
  money =16600;
  moneyDec = moneyDec - money;
  bet.textContent = money + '$';
  down.textContent = moneyDec + '$';
  betcoin[0].classList.remove('hund');
  betcoin[1].classList.remove('five');
  betcoin[2].classList.remove('thou');
  betcoin[3].classList.remove('fiveThou');
  betcoin[4].classList.remove('teThou');
});
function cancel2() {
  if (count === false) {
    count1 = true;
    coins.classList.add('coins');
    coins.classList.remove('tops');
    button_1.classList.remove('hidden');
    button_3.classList.add('hidden');
    button_2.classList.add('hidden');

    if (count1 == true) {
      for (let j = 0; j < betcoin.length; j++) {
        betcoin[j].classList.remove('tops1');
        betcoin[j].classList.remove('hidden');
      }
    }
    count = true;
  }
  moneyDec = money + moneyDec;
  money = 0;
  bet.textContent = money + '$';
  down.textContent = moneyDec + '$';
  betcoin[0].classList.add('hund');
  betcoin[1].classList.add('five');
  betcoin[2].classList.add('thou');
  betcoin[3].classList.add('fiveThou');
  betcoin[4].classList.add('tenThou');
}
button_2.addEventListener('click', function () {
  cancel2();
});
button_3.addEventListener('click', function () {
  for (let j = 0; j < betcoin.length; j++) {
    if (betcoin[j].classList.contains('tops1')) {
      betcoin[j].classList.remove('hidden');
    } else if (coins.classList.contains('tops')) {
      coins.classList.remove('hidden');
    } else {
      betcoin[j].classList.add('hidden');
    }
  }
  for (let j = 0; j < 2; j++) {
    re = Math.floor(Math.random() * Arr1.length);
    Arr3.push(re);
    if (j == 0 && Arr3[0] == 0) {
      playerScore = playerScore + 10;
    } else if (re <= 9) {
      playerScore += re + 1;
    } else if (re == 11 || re == 12 || re == 10) {
      playerScore = playerScore + 10;
    }
    score2.textContent = playerScore;
    re2 = Math.floor(Math.random() * Arr2.length);
    Arr4.push(re2);
    ino[j].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
    if (j == 1) {
      re3 = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
    }
  }
  re = Math.floor(Math.random() * Arr1.length);
  re2 = Math.floor(Math.random() * Arr2.length);
  if (re == 0) {
    cpuScore = cpuScore + 10;
  } else if (re <= 9) {
    cpuScore += re + 1;
  } else if (re == 11 || re == 12 || re == 10) {
    cpuScore = cpuScore + 10;
  }
  score1.textContent = cpuScore;
  inc[0].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
  button_3.classList.add('hidden');
  button_2.classList.add('hidden');
  cpu.classList.remove('hidden');
  cards.classList.remove('hidden');
  stand.classList.remove('hidden');
  double.classList.remove('hidden');
  hit.classList.remove('hidden');
  won.classList.add('hidden');
  lost.classList.add('hidden');
  draw.classList.add('hidden');
});

stand.addEventListener('click', function () {
  re = Math.floor(Math.random() * Arr1.length);
  re2 = Math.floor(Math.random() * Arr2.length);
  inc[1].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
  if (re <= 9) {
    cpuScore += re + 1;
  } else if (re == 11 || re == 12 || re == 10) {
    cpuScore = cpuScore + 10;
  }
  score1.textContent = cpuScore;
  stand.classList.add('hidden');
  double.classList.add('hidden');
  hit.classList.add('hidden');
  for (let j = 3; j < 8; j++) {
    if (playerScore > cpuScore && cpuScore <= 18) {
      re = Math.floor(Math.random() * Arr1.length);
      re2 = Math.floor(Math.random() * Arr2.length);
      inc[j].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
      inc[j].classList.remove('hidden');
      if (re <= 9) {
        cpuScore += re + 1;
      } else if (re == 11 || re == 12 || re == 10) {
        cpuScore = cpuScore + 10;
      }
      score1.textContent = cpuScore;
    }
  }
  if (playerScore > cpuScore && playerScore <= 21) {
    if (playerScore > 21) {
      lost.classList.remove('hidden');
      start.classList.remove('hidden');
      moneyDec = moneyDec-money;
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';
      restart.classList.remove('hidden');

    } else {
      won.classList.remove('hidden');
      levels++;
      level.textContent = 'LEVEL ' + levels;
      continuebut.classList.remove('hidden');
      moneyDec = moneyDec + (money * 2);
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';

    }
  } else if (playerScore < cpuScore) {
    if (cpuScore > 21) {
      won.classList.remove('hidden');
      levels++;
      level.textContent = 'LEVEL ' + levels;
      continuebut.classList.remove('hidden');
      moneyDec = moneyDec + (money * 2);
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';
    } else {
      lost.classList.remove('hidden');
      start.classList.remove('hidden');
      moneyDec = moneyDec-money;
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';
      restart.classList.remove('hidden');

    }
  } else if (playerScore == cpuScore) {
    draw.classList.remove('hidden');
    continuebut.classList.remove('hidden');
  }
  score1.textContent = cpuScore;
restart.classList.remove('hidden');
});
double.addEventListener('click', function () {
  moneyDec = moneyDec-money;
  money=money*2;
  
  re = Math.floor(Math.random() * Arr1.length);
  re2 = Math.floor(Math.random() * Arr2.length);
  inc[1].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
  if (re <= 9) {
    cpuScore += re + 1;
  } else if (re == 11 || re == 12 || re == 10) {
    cpuScore = cpuScore + 10;
  }
  score1.textContent = cpuScore;
  re = Math.floor(Math.random() * Arr1.length);
  re2 = Math.floor(Math.random() * Arr2.length);
  ino[2].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
  ino[2].classList.remove('hidden');
  if (re <= 9) {
    playerScore += re + 1;
  } else if (re == 11 || re == 12 || re == 10) {
    playerScore = playerScore + 10;
  }
  score2.textContent = playerScore;
  if (cpuScore > playerScore) {
    lost.classList.remove('hidden');
    start.classList.remove('hidden');
    moneyDec = moneyDec-money;
    down.textContent = moneyDec + '$';
    money = 0;
    bet.textContent = money + '$';
    restart.classList.remove('hidden');

  } else if (playerScore > 21) {
    lost.classList.remove('hidden');
    start.classList.remove('hidden');
    moneyDec = moneyDec-money;
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';
      restart.classList.remove('hidden');

      } else if (playerScore > cpuScore) {
    for (let j = 3; j < 8; j++) {
      if (playerScore > cpuScore && cpuScore <= 20) {
        re = Math.floor(Math.random() * Arr1.length);
        re2 = Math.floor(Math.random() * Arr2.length);
        inc[j].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
        inc[j].classList.remove('hidden');
        if (re <= 9) {
          cpuScore += re + 1;
        } else if (re == 11 || re == 12 || re == 10) {
          cpuScore = cpuScore + 10;
        }
        score1.textContent = cpuScore;
      }
    }
    if (playerScore > cpuScore || cpuScore > 21) {
      won.classList.remove('hidden');
      levels++;
      level.textContent = 'LEVEL ' + levels;
      continuebut.classList.remove('hidden');
      moneyDec = moneyDec + (money * 2);
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';
    } else if (playerScore < cpuScore) {
      lost.classList.remove('hidden');
      start.classList.remove('hidden');
      moneyDec = moneyDec-money;
      down.textContent = moneyDec + '$';
      money = 0;
      bet.textContent = money + '$';    } else if (playerScore == cpuScore) {
      draw.classList.remove('hidden');
      continuebut.classList.remove('hidden');
      restart.classList.remove('hidden');

    }
    else if(playerScore==cpuScore){
      draw.classList.remove('hidden');
      continuebut.classList.remove('hidden');
    }
  }

  double.classList.add('hidden');
  hit.classList.add('hidden');
  stand.classList.add('hidden');
});

hit.addEventListener('click', function () {
  double.classList.add('hidden');
  re = Math.floor(Math.random() * Arr1.length);
  re2 = Math.floor(Math.random() * Arr2.length);
  ino[cou].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
  ino[cou].classList.remove('hidden');
  cou++;
  if (re <= 9) {
    playerScore += re + 1;
  } else if (re == 11 || re == 12 || re == 10) {
    playerScore = playerScore + 10;
  }
  score2.textContent = playerScore;
  if (playerScore > 21) {
    re = Math.floor(Math.random() * Arr1.length);
    re2 = Math.floor(Math.random() * Arr2.length);
    inc[1].src = './images/' + 'PNG/' + Arr1[re] + Arr2[re2] + '.png';
    lost.classList.remove('hidden');
    moneyDec = moneyDec-money;
    down.textContent = moneyDec + '$';
    money = 0;
    bet.textContent = money + '$';
    start.classList.remove('hidden');
    restart.classList.remove('hidden');


    hit.classList.add('hidden');
    stand.classList.add('hidden');
    if (re <= 9) {
      cpuScore += re + 1;
    } else if (re == 11 || re == 12 || re == 10) {
      cpuScore = cpuScore + 10;
    }
    score1.textContent = cpuScore;
  }
});

function coinsBeta(element) {
  count = false;

  if (count1 === true) {
    console.log(element.classList.contains('thou'));
    element.classList.remove('betCoins');
    element.classList.add('tops1');
    button_3.classList.remove('hidden');
    button_1.classList.add('hidden');
    button_2.classList.remove('hidden');
  }
  if (element.classList.contains('hund') == true) {
    money = money + 100;
    moneyDec = moneyDec - 100;
    bet.textContent = money + '$';
    down.textContent = moneyDec + '$';
    element.classList.remove('hund');
  } else if (element.classList.contains('five') == true) {
    money = money + 500;
    moneyDec = moneyDec - 500;
    bet.textContent = money + '$';
    down.textContent = moneyDec + '$';
    element.classList.remove('five');
  } else if (element.classList.contains('thou') == true) {
    money = money + 1000;
    moneyDec = moneyDec - 1000;
    bet.textContent = money + '$';
    down.textContent = moneyDec + '$';
    element.classList.remove('thou');
  } else if (element.classList.contains('fiveThou') == true) {
    money = money + 5000;
    moneyDec = moneyDec - 5000;
    bet.textContent = money + '$';
    down.textContent = moneyDec + '$';
    element.classList.remove('fiveThou');
  } else if (element.classList.contains('tenThou') == true) {
    money = money + 10000;
    moneyDec = moneyDec - 10000;
    bet.textContent = money + '$';
    down.textContent = moneyDec + '$';
    element.classList.remove('tenThou');
  }
}
betcoin.forEach(element => {
  element.addEventListener('click', () => coinsBeta(element));
});
function cancel(element) {
  element.classList.add('betCoins');
  element.classList.remove('tops1');
}
function cancelfun() {
  cancel2();
  inc[1].src = './images/PNG/red_back.png';
  continuebut.classList.add('hidden');
  bet.textContent = '0$';
  down.textContent = moneyDec + money + '$';
  cpu.classList.add('hidden');
  cards.classList.add('hidden');
  start.classList.add('hidden');
  for (let j = 2; j < ino.length; j++) {
    ino[j].classList.add('hidden');
  }
  for (let j = 2; j < ino.length; j++) {
    inc[j].classList.add('hidden');
  }
  cou = 2;
  count = true;
  count1 = true;
  count2 = 0;
  count3 = 0;
  playerScore = 0;
  cpuScore = 0;
  Arr3 = [];
  Arr4 = [];
  increase = 22;
  increase1 = 22;
  increase2 = 500;
  button_1.classList.remove('hidden');
}
continuebut.addEventListener('click', () => {
  cancelfun();
  moneyDec = moneyDec + money;
  down.textContent = moneyDec + '$';
  restart.classList.add('hidden');

});

start.addEventListener('click', () => {
  cancelfun();
  start.classList.add('hidden');
  restart.classList.add('hidden');
  level.textContent = 'LEVEL 1';
  levels = 1;
});
restart.addEventListener('click', () => {
  cancelfun();
  restart.classList.add('hidden');
  level.textContent = 'LEVEL 1';
  levels = 1;
  money=0;
  moneyDec =16600;
  bet.textContent = '0$';
  down.textContent = moneyDec + money + '$';
});

help.addEventListener('click', () => {
overlay.classList.remove('hidden');
})
const closeModal = function () {
  overlay.classList.add('hidden');
};btnCloseModal.addEventListener('click', closeModal);
