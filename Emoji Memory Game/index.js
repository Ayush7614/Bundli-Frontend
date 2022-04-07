const deck = document.getElementById("card-deck");

let moves = 0;
let count = document.querySelector(".moves");

let cardMatch = [];

const stars = document.querySelectorAll(".fa-star");

let starsList = document.querySelectorAll(".stars li");

var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".time");

let matchedCard = document.getElementsByClassName("match");

let closeicon = document.querySelector(".close");

let modal = document.getElementById("popup1");





var card = document.querySelectorAll(".card"); // 12 li
let cards = [...card]; // ... is the spread operator containing the 12 li s


var displayCard = function (){
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
};

//shuffling of cards

function shuffle(array){
    let currentIndex = array.length - 1, temp, randomIndex;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
        currentIndex--;
    }
    return array;
    
}

document.body.onload = startGame();


function startGame(){
    
    cardMatch = [];

    cards = shuffle(cards);


    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
    // reset moves
    moves = 0;
    count.innerHTML = moves;
    // reset rating
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
    //reset timer
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector(".time");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
}



// Matching of the cards

function cardFlip(){
    cardMatch.push(this);
    let len = cardMatch.length;

    if(len == 2){
        movesCount();
        console.log(cardMatch[0].type);
        if(cardMatch[0].type === cardMatch[1].type){
            matched();
        }
        else{
            unmatched();
        }
    }
};
   
function matched(){
    cardMatch[0].classList.add("match" , "disabled");
    cardMatch[1].classList.add("match" , "disabled");
    cardMatch[0].classList.remove("show" , "open" , "no-event");
    cardMatch[1].classList.remove("show" , "open", "no-event");
    cardMatch = [];
}
function unmatched(){
    cardMatch[0].classList.add("unmatched");
    cardMatch[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        cardMatch[0].classList.remove("show", "open", "no-event","unmatched");
        cardMatch[1].classList.remove("show", "open", "no-event","unmatched");
        enable();
        cardMatch = [];
    },1100);
}

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

function enable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}


// moves
function movesCount(){
    moves++;
    count.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    // setting rates based on moves
    if (moves > 8 && moves < 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}

// timer

var interval;
function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"min "+second+"s";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}



// @description congratulations when all cards match, show modal and moves, time and rating
function congratulations(){
    if (matchedCard.length == 12){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;

        //closeicon on modal
        closeModal();
    };
}


// @description close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    });
}


// @desciption for user to play Again 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}

for (var i = 0; i < cards.length; i++){
    card = cards[i];
    card.addEventListener("click", displayCard);
    card.addEventListener("click", cardFlip);
    card.addEventListener("click",congratulations);
};