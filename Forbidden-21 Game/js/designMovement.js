const svgRight = document.querySelector('.svg-right');
const svgLeft = document.querySelector('.svg-left');

setInterval(()=>{
    let screenWidth = window.innerWidth;
    svgRight.style.right = 100 - ((1440-screenWidth)/4) + "px"
    svgLeft.style.left = 100 - ((1440-screenWidth)/4) + "px"
    console.log(svgRight.style.right);
    console.log(svgLeft.style.left);
}, 100)