// PAIRS GAME

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

let pair1 = "https://lauratoddcodes.github.io/Pairs-Game/images/book.svg";
let pair2 = "https://lauratoddcodes.github.io/Pairs-Game/images/globe.svg";
let pair3 = "https://lauratoddcodes.github.io/Pairs-Game/images/mortarboard.svg";
let pair4 = "https://lauratoddcodes.github.io/Pairs-Game/images/pen.svg";
let pair5 = "https://lauratoddcodes.github.io/Pairs-Game/images/pencil.svg";
let pair6 = "https://lauratoddcodes.github.io/Pairs-Game/images/physics.svg";
let pair7 = "https://lauratoddcodes.github.io/Pairs-Game/images/schoolBag.svg";
let pair8 = "https://lauratoddcodes.github.io/Pairs-Game/images/schoolBell.svg";
let pair9 = "https://lauratoddcodes.github.io/Pairs-Game/images/scissors.svg";
let pair10 = "https://lauratoddcodes.github.io/Pairs-Game/images/testTubes.svg";
let arr = [pair1, pair1, pair2, pair2, pair3, pair3, pair4, pair4, pair5, pair5, pair6, pair6, pair7, pair7, pair8, pair8, pair9, pair9, pair10, pair10];
shuffle(arr);

function assignCards(){
    document.getElementById("img1").src = arr[0];
    document.getElementById("img2").src = arr[1];
    document.getElementById("img3").src = arr[2];
    document.getElementById("img4").src = arr[3];
    document.getElementById("img5").src = arr[4];
    document.getElementById("img6").src = arr[5];
    document.getElementById("img7").src = arr[6];
    document.getElementById("img8").src = arr[7];
    document.getElementById("img9").src = arr[8];
    document.getElementById("img10").src = arr[9];
    document.getElementById("img11").src = arr[10];
    document.getElementById("img12").src = arr[11];
    document.getElementById("img13").src = arr[12];
    document.getElementById("img14").src = arr[13];
    document.getElementById("img15").src = arr[14];
    document.getElementById("img16").src = arr[15];
    document.getElementById("img17").src = arr[16];
    document.getElementById("img18").src = arr[17];
    document.getElementById("img19").src = arr[18];
    document.getElementById("img20").src = arr[19];
}

assignCards();

let timer = null;
let time = 0;

const timerElement = document.getElementById("timer")
// declare startTimer function
function startTimer(){
    timerElement.innerHTML = time;
    time += 1;
}

// if the timer is not started, start timer
[...document.querySelectorAll(".back, .front")].forEach(item => 
    item.addEventListener("click", function() {
    if(timer == null){
        timer = setInterval(startTimer, 1000);
    }
}));



let bestTimeInt = 100000000;

[...document.querySelectorAll(".back, .front")].forEach(item => 
    item.addEventListener("click", function() {

    let foundAllPairs = document.querySelectorAll(".pairMatched").length;
    // if player has found all but last pair
    // foundAllPairs should be 18
    if (time > 0 && foundAllPairs == 18) {
        // the next card they flip will have gameComplete class added to it
        this.classList.add("gameComplete");
        let gameComplete = document.querySelectorAll(".gameComplete").length;
    
        [...document.querySelectorAll(".back, .front")].forEach(item => 
            item.addEventListener("click", function() {
            // the next card they flip will stop the timer
            if(gameComplete == 1){
                clearInterval(timer);
                
                // high score
                let currentTime = timerElement.innerHTML;
                let currentTimeInt = parseInt(currentTime);
                console.log(`The current time is ${currentTimeInt}`)
                
                let bestTime = document.getElementById("bestTime").innerHTML;
                let bestTimeInt = parseInt(bestTime);
                console.log(`The best time is ${bestTimeInt}`)
                
                document.getElementById("pairsResult").innerHTML = `Your time was ${currentTimeInt} seconds`;
                
                if(currentTimeInt < bestTimeInt || bestTimeInt == 0){
                    document.getElementById("bestTime").innerHTML = currentTime;
                }
                
                if(currentTimeInt < bestTimeInt && bestTimeInt != 0){
                    const highScore = document.getElementById("highScore");
                    highScore.innerHTML = "<span>You beat your </br> best time!</span>";
                    highScore.classList.add("highScoreAnimate");
                }
                
                setTimeout(function(){
                    const modal = document.getElementById("pairsModal");
                    modal.style.opacity = "1";
                    modal.style.pointerEvents = "auto";
                    gameComplete = null;
                    timer = null;
                    time = 0;
                    document.getElementById("timer").innerHTML = time;
                }, 1000)
            }
        }));
    }
}));


[...document.querySelectorAll(".back, .front")].forEach(item => 
    item.addEventListener("click", function() { 
    // find the class of the card that's been selected
    let cardFlipped = this.parentNode.classList.value;
    
    // if the card isn't flipped, then flip it
    if(cardFlipped == "card" || cardFlipped == "card returnCard") {
        
        // give the card the 'flipCard' class and remove the 'returnCard' class if needed
        this.parentNode.classList.toggle("flipCard")
        this.parentNode.classList.remove("returnCard");
        
        let flippedCards = document.querySelectorAll(".flipCard").length;
        
        if (flippedCards % 2 == 1) {
        // give the front-side of the selected card the id of selectedCard1
        this.nextElementSibling.id = "selectedCard1";
        this.nextElementSibling.classList.add("selectedCard");
        }
        else if (flippedCards % 2 == 0) {
        // give the front-side of the selected card the id of selectedCard2
        this.nextElementSibling.id = "selectedCard2";
        this.nextElementSibling.classList.add("selectedCard");
        
        const selectedCard1 = document.getElementById("selectedCard1");
        const selectedCard2 = document.getElementById("selectedCard2");

        let src1 = selectedCard1.childNodes[0].src;
        let src2 = selectedCard2.childNodes[0].src;

        
        if(src1 == src2){
            selectedCard1.parentNode.classList.add("pairMatched");
            selectedCard2.parentNode.classList.add("pairMatched");
            selectedCard1.removeAttribute("id")
            selectedCard1.classList.remove("selectedCard");
            selectedCard2.removeAttribute("id")
            selectedCard2.classList.remove("selectedCard");        
        }
        else {
            // to stop player selecting a new card before this has played out
            setTimeout(function(){
            selectedCard1.parentNode.classList.toggle("returnCard")
            selectedCard1.parentNode.classList.remove("flipCard");
            selectedCard2.parentNode.classList.toggle("returnCard")
            selectedCard2.parentNode.classList.remove("flipCard");
            selectedCard1.removeAttribute("id");
            selectedCard2.removeAttribute("id");
            }, 1500);
        }
        
        }
        
        
    }
    // if the card is flipped, then return it to back-side facing up
    else if(cardFlipped == "card flipCard"){
        
        // give the card the 'returnCard' class and remove the 'flipCard' class
        this.parentNode.classList.toggle("returnCard")
        this.parentNode.classList.remove("flipCard");
        
        // remove the id of 'selectedCard1' from the front-side of the card
        document.getElementById("selectedCard1").removeAttribute("id");
        
    }


}));


// reset button

document.getElementById("resetBtn").addEventListener("click", function(){
    console.log("clicks")
    const card = document.querySelectorAll(".card");
    const back = document.getElementsByClassName("back");
    const front = document.getElementsByClassName("front");
    const highScore = document.getElementById("highScore");
    const modal = document.getElementById("pairsModal");
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove("flipCard");
        card[i].classList.remove("pairMatched");
        card[i].classList.remove("returnCard");
    }
    for (let j = 0; j < back.length; j++) {
        back[j].classList.remove("gameComplete");
    }
    for (let k = 0; k < front.length; k++) {
        front[k].classList.remove("selectedCard");
    }
    highScore.style.fontSize = "0.25em";
    highScore.innerHTML = "";
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    time = 0
    shuffle(arr);
    assignCards();
    let gameComplete = 0;
});

