const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
let particleArray1 = [];

//to handle mouse position
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('mousemove', function(e) {
    mouse.x = e.x+canvas1.clientLeft/2;
    mouse.y = e.y+canvas1.clientTop/2;
    console.log(mouse.x,mouse.y);
});

function drawImageInParticle() {
    let imageWidth = png.width;
    let imageHeight = png.height;
    const data = ctx1.getImageData(0, 0, imageWidth, imageHeight);
    ctx1.clearRect(0,0,canvas1.width,canvas1.height);

    class Particle1 {
        constructor(x, y, color) {
            this.x = x + canvas1.width/2 - png.width*2,
            this.y = y + canvas1.height/2 - png.height*2,
            this.color = color,
            this.size = 2,
            this.baseX = x + canvas1.width/2 - png.width*2,
            this.baseY = y + canvas1.height/2 - png.height*2,
            this.density = (Math.random()*10) + 2;
        }
        draw() {
            ctx1.beginPath();
            ctx1.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx1.closePath();
            ctx1.fill();
        }
        update() {
            ctx1.fillStyle = this.color;

            //to detect collision
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);
            let forceX = dx/distance;
            let forceY = dx/distance;

            const maxDistance = 100;
            let force = (maxDistance - distance)/maxDistance;
            if(force < 0) 
                force = 0;
            
            let directionX = forceX*force*this.density*0.6;
            let directionY = forceY*force*this.density*0.6;
            
            if(distance < mouse.radius + this.size) {
                this.x -= directionX;
                this.y -= directionY;
            }
            else {
                if(this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/20;
                }
                if(this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy/20;
                }
            }
            this.draw();
        } 
    }
    function init1() {
        particleArray1 = []

        for(let y=0,y2=data.height;y<y2;y++) {
            for(let x=0,x2=data.width;x<x2;x++) {
                if(data.data[(y*4*data.width)+(x*4)+3]>128) {
                    let positionX = x;
                    let positionY = y;
                    let color = "rgba("+data.data[(y*4*data.width)+(x*4)]+','+data.data[(y*4*data.width+(x*4)+1)]+','+data.data[(y*4*data.width+(x*4)+2)];
                    particleArray1.push(new Particle1(positionX*4,positionY*4,color));
                }
            }
        }
    }
    function animate1() {
        requestAnimationFrame(animate1);
        ctx1.fillStyle = 'rgba(0,0,0,0.05)';
        ctx1.fillRect(0, 0, innerWidth, innerHeight);
        
        for(let i=0;i<particleArray1.length;i++) {
            particleArray1[i].update();
        }
    }
    init1();
    animate1();

    window.addEventListener('resize', function() {
        canvas1.width = innerWidth;
        canvas1.height = innerHeight;
        init1();
    });
}

const png = new Image();
png.src = "data:image/png;base64,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";



window.addEventListener('mouseout',
    function() {
        mouse.x = undefined;
        mouse.y = undefined;
    }
)

window.addEventListener('load', (e) => {
    console.log('page has loaded');
    ctx1.drawImage(png,0,0);
    drawImageInParticle();
});