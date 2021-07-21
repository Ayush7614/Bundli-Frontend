	window.onload = function() {
		$("#high_score").html(localStorage.getItem("hscore")); //write high score
		$( ".block" ).css( "background-color", "#ddd" );

		// continue if data exists in backup_array local storage
		var result = JSON.parse(localStorage.getItem("backup_array"));
		if (result) {
			restoreForContinue();
		}else{ //start new game if no previous data is stored
			startNewGame();
		}
		
	}

	function startNewGame(){
		$(".number").html("");
		$("#total_moves").html('0');
		$("#total_score").html('0');
		initializeTwoBlocks();
		changeBlockColor();
	}
	
	/* to set Highscore*/
	function setHighScore(new_score) {
		// Check browser support
		if (typeof(Storage) !== "undefined") {
		    if (new_score > localStorage.getItem("hscore")) {
		   	 	localStorage.setItem("hscore", new_score);
		    }
		} else {
		    console.log("Web storage not supported");
		}
	}

	/* To store latest itemset for continue option */
	function backupData() {
		var allBlocks = document.getElementsByClassName("block");
		var latest_array = [];

		if (typeof(Storage) !== "undefined") {
		   	 for (var i = 0; i < allBlocks.length; i++) {
		   		latest_array.push($( "#blk-"+i).html());
		   	}
		   	localStorage.setItem("backup_array", JSON.stringify(latest_array));
		   	localStorage.setItem("backup_moves", $("#total_moves").html());
		   	localStorage.setItem("backup_score", $("#total_score").html());

		    console.log(JSON.parse(localStorage.getItem("backup_array")));
		}
	}


	function restoreForContinue(){
		var allBlocks = document.getElementsByClassName("block");
		var result = JSON.parse(localStorage.getItem("backup_array"));
		console.log(result);
		if (typeof(Storage) !== "undefined") { // to check if brower supports local storage
		    if (result) {
		   	 	for (var i = 0; i < allBlocks.length; i++) {
		   			$( "#blk-"+i).html(result[i]);
		   		}
		   		$("#total_moves").html(localStorage.getItem("backup_moves"));
		   		$("#total_score").html(localStorage.getItem("backup_score"));

		   		changeBlockColor();
		    }
		}
	}

	$(document).keydown(function(e){
		switch(e.which) {
	        case 37: // left
	        handleLeft();
	        break;

	        case 38: // up
	        handleUp();
	        break;

	        case 39: // right
	        handleRight();
	        break;

	        case 40: // down
	        handleDown();
	        break;

	        default: return; // exit this handler for other keys
	    }
	    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

	function initializeTwoBlocks(){
		var first_block = Math.floor(Math.random() * 15);
		var second_block = Math.floor(Math.random() * 15);
		// if both number came same		
		if (first_block==second_block) {
			var second_block = (first_block + 1)%15;
		}
		
		// populate two blocks with 2
		$("#block-"+first_block).html("<p class='number' id='blk-"+first_block+"'>2</p>");
		$("#block-"+second_block).html("<p class='number' id='blk-"+second_block+"'>2</p>");

	}

	function changeBlockColor(){
		var allBlocks = document.getElementsByClassName("block");

		for (var i = allBlocks.length - 1; i >= 0; i--) {  $( "#blk-0").html() == ""
			//if(allBlocks[i].innerHTML=="<p class=\"number\" id='blk-'+i>2</p>"){
				if($( "#blk-"+i).html()=="2"){
					allBlocks[i].style.background='#ff99ff';
				}else if($( "#blk-"+i).html()=="4"){
					allBlocks[i].style.background='#6699cc';
				}
				else if($( "#blk-"+i).html()=="8"){
					allBlocks[i].style.background=' #5c8a8a';
				}
				else if($( "#blk-"+i).html()=="16"){
					allBlocks[i].style.background='#008ae6';
				}
				else if($( "#blk-"+i).html()=="32"){
					allBlocks[i].style.background='#661aff';
				}else if($( "#blk-"+i).html()=="64"){
					allBlocks[i].style.background=' #ff8533';
				}
				else if($( "#blk-"+i).html()=="128"){
					allBlocks[i].style.background='#88ac00';
				}
				else if($( "#blk-"+i).html()=="256"){
					allBlocks[i].style.background='#99994d';
				}
				else if($( "#blk-"+i).html()=="512"){
					allBlocks[i].style.background='#ffd11a';
				}
				else if($( "#blk-"+i).html()=="1024"){
					allBlocks[i].style.background='#ff0055';
				}
				else if($( "#blk-"+i).html()=="2048"){
					allBlocks[i].style.background='#4d0019';
				}
				else if($( "#blk-"+i).html()=="4096"){
					allBlocks[i].style.background='#1a0000';
				}else{
					allBlocks[i].style.background='#ddd';
				}
			}
		}

		function handleUp(){
			var changed_something = 0;
		// when up key is pressed (0,4,8,12),(1,5,9,13),... should be merged if possible
		for (var j = 0; j < 4; j++) {
			for (var i = 0; i <16; i++) {

				if ( ($( "#blk-"+i).html() != "") && i<12 && ($( "#blk-"+i).html() == $( "#blk-"+(i+4)).html())) { //merge if same numbers came
					var temp= eval(2 * ($( "#blk-"+i).html()));
					$( "#blk-"+i).html(temp);
					$( "#blk-"+(i+4)).html("");
					var changed_something = 1;
					updateScore($( "#blk-"+i ).html()); //send the number to update score
				}

				if ($( "#blk-"+i).html() == "" && i<12) { //upshift the blank spaces
					var temp= $( "#blk-"+(i+4)).html()
					/* to check if some position changes as it doesnot make sense if both are empty space*/
					if (i<12 && (($("#blk-"+i).html() != "") || ($("#blk-"+(i+4)).html() != ""))) {
						var changed_something = 1;
					}

					$( "#blk-"+i ).html(temp);
					$( "#blk-"+(i+4)).html("");
				}
			}
		}
		// if something is changed, we need to generate new item
		if (changed_something) {
			generateNewItem();
		}
		//change block color after change in numbers
		changeBlockColor();
	}

	function handleLeft(){
		var changed_something = 0;
		// when Left key is pressed (0,1,2,3),(4,5,6,7),... should be merged if possible
		for (var j = 0; j < 4; j++) {
			for (var i = 0; i <16; i++) {

				if ( ($( "#blk-"+i).html() != "") && i!=3 && i!=7 && i!=11 && i!=15 && ($( "#blk-"+i).html() == $( "#blk-"+(i+1)).html())) { //merge if same numbers came
					var temp= eval(2 * ($( "#blk-"+i).html()));
					$( "#blk-"+i).html(temp);
					$( "#blk-"+(i+1)).html("");
					var changed_something = 1;
					updateScore($( "#blk-"+i ).html()); //send the number to update score


				}

				if ($( "#blk-"+i).html() == "" && i!=3 && i!=7 && i!=11 && i!=15) {
					var temp= $( "#blk-"+(i+1)).html()
					/*to check if some position changes as it doesnot make sense if both are empty space*/
					if (i!=3 && i!=7 && i!=11 && i!=15 && (($("#blk-"+i).html() != "") || ($("#blk-"+(i+1)).html() != ""))) {
						var changed_something = 1;
					}
					$( "#blk-"+i ).html(temp);
					$( "#blk-"+(i+1)).html("");
				}
			}
		}

		// if something is changed, we need to generate new item
		if (changed_something) {
			generateNewItem();
		}
		
		changeBlockColor();
	}

	function handleRight(){
		var changed_something = 0;
		// when Right key is pressed (0,1,2,3),(4,5,6,7),... should be merged if possible
		for (var j = 0; j < 4; j++) {
			for (var i = 0; i <16; i++) {

				if ( ($( "#blk-"+i).html() != "") && i!=0 && i!=4 && i!=8 && i!=12 && ($( "#blk-"+i).html() == $( "#blk-"+(i-1)).html())) { //merge if same numbers came
					var temp= eval(2 * ($( "#blk-"+i).html()));
					$( "#blk-"+i).html(temp);
					$( "#blk-"+(i-1)).html("");
					var changed_something = 1;
					updateScore($( "#blk-"+i ).html()); //send the number to update score
				}

				if ($( "#blk-"+i).html() == "" && i!=0 && i!=4 && i!=8 && i!=12) {
					var temp= $( "#blk-"+(i-1)).html()
					/*to check if some position changes as it doesnot make sense if both are empty space*/
					if (i!=0 && i!=4 && i!=8 && i!=12 && (($("#blk-"+i).html() != "") || ($("#blk-"+(i-1)).html() != ""))) {
						var changed_something = 1;
					}
					$( "#blk-"+i ).html(temp);
					$( "#blk-"+(i-1)).html("");
				}
			}
		}
		// if something is changed, we need to generate new item
		if (changed_something) {
			generateNewItem();
		}
		changeBlockColor();
	}

	function handleDown(){
		var changed_something = 0;
		// when Down key is pressed (0,4,8,12),(1,5,9,13),... should be merged if possible
		for (var j = 0; j < 4; j++) {
			for (var i = 0; i <16; i++) {

				if ( ($( "#blk-"+i).html() != "") && i>3 && ($( "#blk-"+i).html() == $( "#blk-"+(i-4)).html())) { //merge if same numbers came
					var temp= eval(2 * ($( "#blk-"+i).html()));
					$( "#blk-"+i).html(temp);
					$( "#blk-"+(i-4)).html("");
					var changed_something = 1;
					updateScore($( "#blk-"+i ).html()); //send the number to update score
				}

				if ($( "#blk-"+i).html() == "" && i>3) {
					var temp= $( "#blk-"+(i-4)).html();
					/*to check if some position changes as it doesnot make sense if both are empty space*/
					if (i>3 && (($("#blk-"+i).html() != "") || ($("#blk-"+(i-4)).html() != ""))) {
						var changed_something = 1;
					}
					$( "#blk-"+i ).html(temp);
					$( "#blk-"+(i-4)).html("");
				}
			}
		}

		// if something is changed, we need to generate new item
		if (changed_something) {
			generateNewItem();
		}
		changeBlockColor();
	}

	function generateNewItem(){ // to generate and place new item on every move
		var empty_fields = []; // array to store empty fields
		for (var i = 0; i <16; i++) {
			if ($( "#blk-"+i).html() == "") {
				empty_fields.push(i);
			}
		}
		//to update move count
		var count= eval($( "#total_moves").html());
		count++;
		$( "#total_moves").html(count);
		//get an empty field id randomly
		var new_item = empty_fields[Math.floor(Math.random()*empty_fields.length)];
		//place new number 2 in field
		$( "#blk-"+new_item).html("2");
		changeBlockColor();
		checkGameOver();
		backupData(); // for continue option
	}

	function updateScore(new_value){
		var old_score = eval($("#total_score").html());
		var new_score = old_score+ 3 * eval(new_value);
		$("#total_score").html(new_score);
		setHighScore(new_score);
	}

	function checkGameOver(){
		var empty_fields = []; // array to store empty fields
		for (var i = 0; i <16; i++) {
			if ($( "#blk-"+i).html() == "") {
				empty_fields.push(i);
			}
		}
		//console.log(empty_fields.length);

		//if no empty field send game over message
		if(empty_fields.length==0){
			var game_over = true;
			for (var i = 0; i < 16; i++) {
				/*this condition is used to determine if any move is possible
				in any direction___made by just combining up,down,left,write conditions above*/
				if ((($( "#blk-"+i).html() != "") && i<12 && ($( "#blk-"+i).html() == $( "#blk-"+(i+4)).html())) || ( ($( "#blk-"+i).html() != "") && i!=3 && i!=7 && i!=11 && i!=15 && ($( "#blk-"+i).html() == $( "#blk-"+(i+1)).html())) || ( ($( "#blk-"+i).html() != "") && i!=0 && i!=4 && i!=8 && i!=12 && ($( "#blk-"+i).html() == $( "#blk-"+(i-1)).html())) || ( ($( "#blk-"+i).html() != "") && i>3 && ($( "#blk-"+i).html() == $( "#blk-"+(i-4)).html()))){
					var game_over = false;
				}
			}
			if(game_over){
				$( "#status" ).html("<hr>GAME<br>OVER");
			}
		}
	}
