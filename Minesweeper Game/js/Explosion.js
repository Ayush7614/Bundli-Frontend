function random(min, max) {
  /* Generates a random number between max and min */
  return min + Math.random() * (max - min);
}

function randomColor() {
  /* Return a random color */

  const red = "#CC1600";
  const darkOrange = "#D33407";
  const orange = "#E17016";
  const yellow = "#FFA318";
  const gray = "#525252";

  let i = random(0, 100);

  switch (true) {
    case i <= 10:
      return red;
    case i <= 20:
      return darkOrange;
    case i <= 30:
      return orange;
    case i <= 50:
      return yellow;
    default:
      return gray;
  }
}

function randomDirection() {
  /* Return a vector pointing to a random direction */

  let angle = random(0, 360) * Math.PI / 180;
  return {
    x: Math.cos(angle),
    y: Math.sin(angle)
  };

}

function Particle(x, y, radius, scale, speed, color) {
  /*
      Particles simple colored dot with a fixed size that moves
      in a direction at a certain speed.

  */
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.scale = scale; // for particle reduction
  this.speed = speed; //speed at which they go to a direction
  this.color = color;
  this.direction = {
    x: 0,
    y: 0
  }; //vector

  this.update = function () {
    /* Update the particle */

    // Particle radius being scaled down
    this.radius -= this.scale / 5;


    if (this.radius < 0) {
      this.radius = 0;
    }

    // moving away from explosion center
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;

  };

  this.draw = function (canvas) {
    /* Draw the particles on the canvas */

    let ctx = canvas.getContext("2d");

    // translates the particle from previous place to new one
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scale, this.scale);

    // drawing a filled circle in the particle's local space
    ctx.beginPath();
    // arc(x, y, radius, startAngle, endAngle, anticlockwise)
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.restore();
  };
}

function Explosion(x, y, number, size, speed) {
  /*
      Creates an explosion with random particles and speed

  */
  let sizeMax = size || 9;
  let sizeMin = 4;
  let speedMax = speed || 15;
  let speedMin = 7;
  let n = number || 20;
  this.particles = [];

  this.initiate = function () {
    /* Initiate the explosion by creating all particles */

    for (let i = 0; i < n; i++) {
      let p = new Particle(x, y);

      p.radius = random(sizeMin, sizeMax);
      p.scale = random(4, 10);
      p.color = randomColor();
      p.speed = random(speedMin, speedMax);
      p.direction = randomDirection();

      this.particles.push(p);

    }
  };

  this.update = function (canvas) {
    /*
        Update the explosion
    */
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw(canvas);
    }
  };

  //Initiate the explosion when the function is called
  this.initiate();
}
