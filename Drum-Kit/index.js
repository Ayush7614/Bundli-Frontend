// Dectecting Button Press

var numberOfButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    //this is just adding event listener to every button, as any button is clicked, we run the anonym. function !

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {   //Anonymous Function called when button clciked

        playMusic(this.innerHTML);  //button clciked known by detcting content inside HTML.
        activeButtonStyle(this.innerHTML);
    });
}


//Detecting Keyboard Press

document.addEventListener("keydown", function (keyboardEvent) {
    playMusic(keyboardEvent.key);
    activeButtonStyle(keyboardEvent.key);
});


//Detecting Key Press

function playMusic(buttonClicked) {
    switch (buttonClicked) {
        case "w":
            var music = new Audio('sounds/tom-1.mp3');
            music.play();
            break;
        case "a":
            var music = new Audio('sounds/tom-2.mp3');
            music.play();
            break;
        case "s":
            var music = new Audio('sounds/tom-3.mp3');
            music.play();
            break;
        case "d":
            var music = new Audio('sounds/tom-4.mp3');
            music.play();
            break;
        case "j":
            var music = new Audio('sounds/snare.mp3');
            music.play();
            break;
        case "k":
            var music = new Audio('sounds/crash.mp3');
            music.play();
            break;
        case "l":
            var music = new Audio('sounds/kick-bass.mp3');
            music.play();
        default:
            console.log("No command found for: " + buttonClicked);
    }
}

// Active Button Animation

function activeButtonStyle(keyPressed) {
    var buttonPress = document.querySelector("." + keyPressed);
    buttonPress.classList.add("pressed");                                       //adds pressed styke
    setTimeout(function () { buttonPress.classList.remove("pressed"); }, 100);    //removes pressed style after 1sec

}