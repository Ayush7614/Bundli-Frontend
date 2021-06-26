function checkfun(form2) {
    allLetter(form2.name);
    strleng(form2.name);
    ValidateEmail(form2.email);
    var x = checkPassword(form2);
}


//name alphabet check-------------------------------------------------
function allLetter(inputtxt) {
    var x = document.getElementById("click");
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    } else {
        swal('Please input alphabet characters only without spaces for USERNAME!');
        x.play();
        return false;
    }
}