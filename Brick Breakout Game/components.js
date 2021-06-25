// LOAD IMAGES //

// LOAD BG IMAGE
const Bg = new Image();
Bg.src = "img/bg2.jpg";

const ballimage = new Image();
ballimage.src = "img/ball-removebg-preview-removebg-preview.png";
const paddleimage = new Image();
paddleimage.src = "img/paddle-removebg-preview.png";

const LEVEL_IMG = new Image();
LEVEL_IMG.src = "img/level.png";

const LIFE_IMG = new Image();
LIFE_IMG.src = "img/life.png";

const SCORE_IMG = new Image();
SCORE_IMG.src = "img/score.png";


// END LOAD IMAGES //

// ************************ //

// LOAD SOUNDS //

const WALL_HIT = new Audio();
WALL_HIT.src = "sounds/wall.mp3";

const LIFE_LOST = new Audio();
LIFE_LOST.src = "sounds/life_lost.mp3";

const PADDLE_HIT = new Audio();
PADDLE_HIT.src = "sounds/paddle_hit.mp3";

const WIN = new Audio();
WIN.src = "sounds/win.mp3";

const BRICK_HIT = new Audio();
BRICK_HIT.src = "sounds/brick_hit.mp3";


// END LOAD SOUNDS //
