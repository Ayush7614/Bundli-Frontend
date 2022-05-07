$('.toggle-bar').on("click", function(event) {
    $('this').toggleClass("open");
    $('.navigation-bar').slideToggle("200");
});