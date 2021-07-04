change_bar_color = () => {
    bar_color = document.getElementById("bar_color_picker").value;
}

change_ball_color = () => {
    ball_color = document.getElementById("ball_color_picker").value;
}

change_background_color = () => {
    background_color = document.getElementById("background_color_picker").value;
}


//listen for keyboard input
window.addEventListener('keydown', function (e) {
    ball.key = e.keyCode;
});
window.addEventListener('keyup', function (e) {
    ball.key = false;
});


//return a random horizontal position of bars
random_x = () => {
    let x = Math.random() * gamecanvas.width;
    if (x >= gamecanvas.width - bar_width) {
        x -= bar_width;
    }
    return x;
}


clear_canvas = () => {
    ctx.clearRect(-ball_radius, -ball_radius, gamecanvas.width + 2 * ball_radius, gamecanvas.height + 2 *
        ball_radius);
    ctx.rect(-ball_radius, -ball_radius, gamecanvas.width + 2 * ball_radius, gamecanvas.height + 2 *
        ball_radius);
    ctx.fillStyle = background_color;
    ctx.fill();
}

bars_initialization = () => {
    //clear the canvas, initialize the holder for bar objects then create new bars
    clear_canvas();

    bar_objects = [];
    for (let i = 0; i < bars_number; i++) {
        bar_objects[i] = new Bar(random_x(), bars_initial_y, bar_width, bar_height, i);
    }

    ball.x = ball_initial_x;
    ball.y = ball_initial_y;
    ball.key = false;

    rising_rate = initial_rising_rate;
    level_display.innerHTML = 0;
    info_display.innerHTML = "";
}

startgame = () => {
    game_session = true;
    all_bars_started = false;
    refreshes = 0;

    //initial interval for calling the sequence of actions on ball and bars until all bars appear on the screen
    bar_movement = () => {
        gamecanvas.focus();
        clear_canvas();

        if (all_bars_started) {
            for (let i = 0; i < bar_objects.length; i++) {
                bar_objects[i].sequence();
            }
        } else {
            //if the last bar has not yet started rising
            if (bar_objects[bar_objects.length - 1].y == bars_initial_y) {
                for (let i = 0; i < bar_objects.length; i++) {
                    //all bars will start rising only if their predecessor has risen to a certain height except the first
                    if (i != 0) {
                        if (bar_objects[i].y - bar_objects[i - 1].y > minimum_y_distance()) {
                            bar_objects[i].sequence();
                        }
                    } else {
                        bar_objects[0].sequence();
                    }
                }
            } else {
                all_bars_started = true;
            }
        }

        //changes game level after a certain number of refreshes, increases rising rate per level
        refreshes += 1;
        if (toggle_game_button.innerHTML == "Pause" && refreshes % 600 == 0) {
            rising_rate += rising_rate_increase;
            level_display.innerHTML = parseInt(level_display.innerHTML) + 1;
        }

        if (game_session) {
            requestAnimationFrame(bar_movement);
        } else {
            status_checker();
        }
    }

    requestAnimationFrame(bar_movement);
}

controller = () => {
    if (toggle_game_button.innerHTML == "Start") {
        bars_initialization();
        startgame();
        toggle_game_button.innerHTML = "Pause";
    } else if (toggle_game_button.innerHTML == "Pause") {
        game_session = false;
        toggle_game_button.innerHTML = "Resume";
    } else if (toggle_game_button.innerHTML == "Resume") {
        game_session = true;
        toggle_game_button.innerHTML = "Pause";
        startgame();
    }
}

status_checker = () => {

    if (toggle_game_button.innerHTML == "Pause") {
        info_display.innerHTML = "Game Over!";
        toggle_game_button.innerHTML = "Start";
    }
    if (toggle_game_button.innerHTML == "Resume") {

    }
}