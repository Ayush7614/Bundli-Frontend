// To generate Alphabet equivalent for digits from 10 to 15
function generateAlphabet(character) {
    
  var alpha = "";
  switch(character) {
    case 10 : alpha = "A";
      break;
    case 11 : alpha = "B";
      break;
    case 12 : alpha = "C";
      break;
    case 13 : alpha = "D";
      break;
    case 14 : alpha = "E";
      break;
    case 15 : alpha = "F";
      break;
  }
  
  return alpha;
}

// To generate Random Hex Code using the Random Method
function generateRandomHexCode() {
  
  var hexCode = "#";
  
  for(var i = 0; i < 6; i++) {

    // Generate Random Code between 1 to 15
    var randomCode = Math.floor(Math.random() * 15) + 1;

    // If the number is between 1 to 9, append it to Hex Code directly
    if(randomCode <= 9) {
      hexCode += randomCode;
    } else {

      // Else, convert the Alphabet equivalent to the digit
      var alpha = generateAlphabet(randomCode);
      hexCode += alpha;
    }    
  }
  
  return hexCode;
}


// Select Variables
var clickMeButton = document.querySelector(".btn");
var colorContainer = document.querySelector(".modified-color");
var mainContainer = document.querySelector(".main-container");


// Event Listener
clickMeButton.addEventListener("click" , function() {
    var hexCode = generateRandomHexCode();

    // Modifying the text and styles of the DOM
    colorContainer.textContent = hexCode;
    colorContainer.style.backgroundColor = hexCode;
    mainContainer.style.backgroundColor = hexCode;
});