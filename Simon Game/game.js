var buttonColors=["red","blue","green","yellow"]
var userClickedPattern=[];
var gamePattern=[];
var level=0;
var started= false;


$(document).keydown(function(){
if(!started)
{
  // $("h1").html("Level "+level);
  nextSequence();
  started = true;
}
  });


  $(".btn").click(function handler(event){

    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
  });



  function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
      if(userClickedPattern.length===gamePattern.length){
        setTimeout(function(){
          nextSequence();
        },1000);
      }
    }
    else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("h1").html("Game  Over, Press Any Key to Restart ");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);

    startOver();
  }
}

function nextSequence(){
  userClickedPattern=[];
  level++;
  $("h1").html("Level "+level);
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);
  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);

}




function playSound(name){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}



function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+currentColor).removeClass('pressed');
}, 100);
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
