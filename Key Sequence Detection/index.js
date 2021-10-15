// Key Sequence Detector
// Press the SPACE bar to reset

const pressed = [];
const secretCode = '38384040373937396665';

window.addEventListener('keyup', e => {
  pressed.push(e.keyCode);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    document.body.classList.add('rainbow');

    canvas.addEventListener('mousedown', e => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => (isDrawing = false));
    canvas.addEventListener('mouseout', () => (isDrawing = false));
  }

  if (e.keyCode === 32) window.location.reload(false);
});

// Canvas Easter Egg
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineWidth = 30;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

ctx.globalCompositeOperation = 'lighten';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 10) direction = !direction;
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}