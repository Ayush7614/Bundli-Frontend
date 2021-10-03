const burger = document.querySelector(".burger");
// const burgerlines = document.querySelectorAll(".burger > div")
const nav = document.querySelector("nav ul");

burger.addEventListener('click', toggleNav );


function toggleNav() { 
    burger.classList.toggle('toggle');
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else{
        nav.style.display = "flex";    
        // burgerlines.style.background = "white"    
    }
}
