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

    } else {
        swal('Please input alphabet characters only without spaces for USERNAME!');
        x.play();

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

    } else {

    }
}
//---email check-----------------------------------------------------------------------------------------
function ValidateEmail(inputText) {
    var x = document.getElementById("click");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        document.form1.email.focus();

    } else {
        setTimeout(() => {
            swal("You have entered an invalid email address!");
            x.play();
        }, 500);



    }
}
//----------password check----------------------------------------------------------//

function checkPassword() {
    var x = document.getElementById("click");
    var password = document.getElementById("password1").value;
    var confirmPassword = document.getElementById("password2").value;

    if (password != confirmPassword || (password == '' && confirmPassword == "")) {
        setTimeout(() => {
            swal("Passwords do not match!Please try again...");
            x.play();

        }, 1000);


    } else {
        setTimeout(() => {
            swal('Thank You! Information Submitted Successfully');
            x.play();
        }, 3000);
    }

}
$(document).ready(function() {
    $(document).on('submit', '#survey-form', function() {
        return false;
    });
});


document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
}, false);