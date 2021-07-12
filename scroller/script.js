window.scroll({
    top: 2500,
    left: 0,
    behavior: 'smooth'
});

// Scroll certain amounts from current position 
window.scrollBy({
    top: 100, // could be negative value
    left: 0,
    behavior: 'smooth'
});

window.addEventListener("scroll", function() { var scroll_y = this.scrollY; if (scroll_y > 0) { document.querySelector("#taketotop").classList.remove("n"); } else { document.querySelector("#taketotop").classList.add("n"); } });