(function () {
			$(document).ready(function() {
				$('.counter1').counterUp({
					time: 3000});
			});	
			document.getElementsByClassName("counter-3").innerHTML ="18";
		})(jQuery);
		
		(function ($) {
			$(document).ready(function() {
				$('.counter2').counterUp({
					delay: 10,
					time: 1000});
			});
		})(jQuery);
		
		(function ($) {
			$(document).ready(function() {
				$('.counter3').counterUp({
					delay: 10,
					time: 2000});
			});
		})(jQuery);
		
		(function ($) {
			$(document).ready(function() {
				$('.counter4').counterUp({
					delay: 10,
					time: 2000});
			});
		})(jQuery);
		
