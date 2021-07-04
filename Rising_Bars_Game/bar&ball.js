//bar prototype
function Bar(initial_x, initial_y, initial_width, initial_height, index) {
    this.id = index;
    this.width = initial_width;
    this.height = initial_height;

    this.x = initial_x;
    this.y = initial_y;

    this.sequence = () => {
        for (let j = 0; j < parseInt(rising_rate); j++) {
            this.raise();
            check_contact();
        }

        this.draw();

        //to avoid drawing the ball everytime a bar is moved
        if (this.id == 0) {
            ball.draw();
        }
    };

    this.erase = () => {
        ctx.clearRect(this.x - 10, this.y, this.width + 25, this.height + 2);
    };
    this.raise = () => {
        if (this.y > 0) {
            this.y -= unit_distance_change;
        } else {
            this.y = bars_initial_y;
            this.x = random_x();
        }
    };
    this.draw = () => {
        ctx.fillStyle = bar_color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}


//ball object
ball = {
    x: ball_initial_x,
    y: ball_initial_y,
    radius: ball_radius,
    contact: false,
    key: false,
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = ball_color;
        ctx.fill();
    },
}


//is called by the ball object. Checks if the ball is in contact with a bar and effects movement to the ball 
check_contact = () => {
    //Contact with a bar
    for (let i = 0; i < bar_objects.length; i++) {
        if (bar_objects[i].y - ball.y - ball.radius <= 5 && bar_objects[i].y - ball.y > 0 && ball.x >= bar_objects[i].x - ball.radius && ball.x <= bar_objects[i].x + bar_objects[i].width + ball.radius) {
            ball.y -= unit_distance_change / bars_number;
            ball.contact = true;
            break;
        } else {
            //after looping through all the bars and not finding any contact
            if (i == bar_objects.length - 1) {
                ball.y += gravity / bars_number;
                ball.contact = false;
            }
        }
    }

    //Horizontal movement of the ball
    if (ball.key && ball.key == 37) {
        ball.x -= ball_swerve;
    }
    if (ball.key && ball.key == 39) {
        ball.x += ball_swerve;
    }
    if (ball.key && ball.key == 27) {
        game_session = false;
        toggle_game_button.innerHTML = "Resume";
    }

    //Check if ball is within the screen
    if (ball.x > gamecanvas.width - ball.radius || ball.x < ball.radius || ball.y < ball.radius || ball.y > bars_initial_y) {
        game_session = false;
    }
}