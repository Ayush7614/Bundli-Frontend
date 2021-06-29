var switchInput = document.getElementsByClassName("form-check-input")[0];

switchInput.addEventListener("click", function (event) {

	if(event.target.checked === true) {

		// Monthly Plan
		document.getElementById("cost-basic").textContent = "$19.99";
		document.getElementById("cost-pro").textContent = "$24.99";
		document.getElementById("cost-master").textContent = "$39.99";
	} else {

		// Annual Plan
		document.getElementById("cost-basic").textContent = "$199.99";
		document.getElementById("cost-pro").textContent = "$249.99";
		document.getElementById("cost-master").textContent = "$399.99";
	}

});