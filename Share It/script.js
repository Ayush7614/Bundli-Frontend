$(document).ready(function () {
  $("a#pageLink").click(function () {
    $("a#pageLink").removeClass("active");
    $(this).addClass("active");
  });
  
  $(".btn-show-left-area").click(function () {
    $(".left-area").removeClass("show");
    $(".left-area").addClass("show");
  });
  
  $(".btn-show-right-area").click(function () {
    $(".right-area").removeClass("show");
    $(".right-area").addClass("show");
  });
  
  $(".btn-close-right").click(function () {
    $(".right-area").removeClass("show");
  });
  
  $(".btn-close-left").click(function () {
    $(".left-area").removeClass("show");
  });
});

$('.main-area').scroll( function() {
    if ($('.main-area').scrollTop() >= 88) {
       $('div.main-area-header').addClass('fixed');
    }
    else {
       $('div.main-area-header').removeClass('fixed');
    }
});