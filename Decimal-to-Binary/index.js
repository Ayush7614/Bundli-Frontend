var decimalInput = document.querySelector("#number");
var display = document.querySelector("#binary");

//Convert input to binary
function makeBinary(n) {
    let output = '';
    if (n != 0) {
        let dividend = n;
        while (dividend != 0) {
            output = (dividend % 2) + output;
            dividend = Math.floor(dividend / 2);
        }
    } else { output = "0"; }
    return output;
}

//Update display
function updateDisplay() {
    display.textContent = makeBinary(Math.abs(decimalInput.value));
}


decimalInput.addEventListener("change", updateDisplay);
decimalInput.addEventListener("click", updateDisplay);

