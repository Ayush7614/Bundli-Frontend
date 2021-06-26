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

//----name length check-------------------------------------------------------------------------------
function strleng(inputtxt) {
    var field = inputtxt.value;
    var mnlen = 5;


    if (field.length < mnlen) {
        var x = document.getElementById("click");
        swal("Username must be atleast 5 characters long!");
        x.play();
        return false;
    } else {
        return true;
    }
}
//---email check-----------------------------------------------------------------------------------------
function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        document.form1.email.focus();
        return true;
    } else {
        setTimeout(() => {
            swal("You have entered an invalid email address!");
        }, 500);

        document.form1.email.focus();
        return false;
    }
}