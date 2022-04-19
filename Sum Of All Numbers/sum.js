const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-txt");
let filterInput;



function isString(value) {
	return typeof value === 'string' || value instanceof String;
}

function sumDigits(N) {
	var total = 0;
    for(var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}

checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);


    infoTxt.style.display = "block";
    // if(isString(n)===true){
    //     return infoTxt.innerHTML = `Enter a valid input`
    // }
    // else{
    infoTxt.innerHTML = `Sum Of Numbers fron 1 to <span>${txtInput.value}</span> is <span>'${sumDigits(n)}'</span>`;

});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});
