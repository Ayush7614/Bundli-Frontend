start_from_menu = () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game_display").style.display = "block";
    if (toggle_game_button.innerHTML == "Start") {
        bars_initialization();
        startgame();
        toggle_game_button.innerHTML = "Pause";
    }
}

go_to_menu = () => {
    if (document.getElementById("game_display").style.display == "block") {
        if (toggle_game_button.innerHTML == "Pause") {
            game_session = false;
            toggle_game_button.innerHTML = "Resume";
        }
    }
    document.getElementById("game_display").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("help").style.display = "none";

    document.getElementById("menu").style.display = "block";
}

open_settings = () => {
    document.getElementById("game_display").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("help").style.display = "none";

    document.getElementById("settings").style.display = "block";
    try {
        var controls = JSON.parse(localStorage.controls);
        if (controls.mobile == "longpress") {
            document.getElementById("longpress").click();
        } else {
            document.getElementById("swipecontrol").click();
        }
    } catch (error) {
        
    }
}

open_help = () => {
    document.getElementById("game_display").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("settings").style.display = "none";

    document.getElementById("help").style.display = "block";
}