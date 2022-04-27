const form = document.querySelectorAll("#my-form");
const emailInput = document.querySelectorAll("#email");
const errorMsg = document.querySelectorAll(".error-msg");
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");

form[0].addEventListener("submit", validateForm);
form[1].addEventListener("submit", validateMobileForm);
hamburger.addEventListener("click", menuBar);

function validateForm(e) {
    if (emailInput[0].value === "") {
        showInfo("Please enter a valid email address", "red");
    } else {
        showInfo("Thank you for subscribing to our newsletter!", "green");
    }

    e.preventDefault();
}

function validateMobileForm(e) {
    if (emailInput[1].value === "") {
        showInfo("Please enter a valid email address", "red");
    } else {
        showInfo("Thank you for subscribing to our newsletter!", "green");
    }

    e.preventDefault();
}

// Show Info
function showInfo(msg, color) {
    errorMsg[0].textContent = msg;
    errorMsg[0].style.color = color;
    emailInput[0].value = "";

    // Mobile form
    errorMsg[1].textContent = msg;
    errorMsg[1].style.color = color;
    emailInput[1].value = "";

    // Clear message after 3 secs
    setTimeout(clearMessage, 3000);
}

// Clear message
function clearMessage() {
    errorMsg[0].textContent = "";
    errorMsg[1].textContent = "";
}

// hamburger
function menuBar() {
    navUl.classList.toggle("show");
}