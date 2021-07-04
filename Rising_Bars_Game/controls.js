var rising_rate = initial_rising_rate; // the speed with which the bars rise,increases during the game. (integer)
var initial_rising_rate = 10; // the speed with which the bars rise
var rising_rate_increase = 1;
var gravity = 0.1; // the speed with which the ball falls
var unit_distance_change = 0.3; // distance an object moves
var ball_swerve = 0.05; // speed of the horizontal movement of ball

var period_per_level = 10000; // level increases after this time interval


// dimensions of the bars
if (window.innerHeight > window.innerWidth) {
    var bar_width = window.innerWidth / 6;
    var bar_height = window.innerHeight / 60;
} else {
    var bar_width = window.innerWidth / 15;
    var bar_height = window.innerHeight / 50;
}

var bars_initial_y = gamecanvas.height + 10; //the vertical position where bars start from
var bars_number = 6; // the number of bars in a game session

// radius of the ball
if (window.innerHeight > window.innerWidth) {
    var ball_radius = window.innerHeight / 80;
} else {
    var ball_radius = window.innerWidth / 150;
}

var ball_initial_x = gamecanvas.width / 2;
var ball_initial_y = 50;
var bar_color = "white";
var ball_color = "white";
var background_color = "black";

var refresh_interval = 15; // time that elapses before objects are cleared then redrawn on the screen

minimum_y_distance = () => {
    return gamecanvas.height * 1.1 / bars_number;
};