const containerSlider = document.querySelector('.container-slider');
const slideRight = document.querySelector('.slide-right');
const slideLeft = document.querySelector('.slide-left');
const buttonUp = document.querySelector('.button-up');
const buttonDown = document.querySelector('.button-down');
const slideLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;

buttonUp.addEventListener('click', () => {
    changeSlide('up')
})
buttonDown.addEventListener('click', () => {
    changeSlide('down')
})

const changeSlide = (flowDirection) => {
    const sliderHeight = containerSlider.clientHeight

    if (flowDirection === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slideLength - 1) {
            activeSlideIndex = 0;
        }
    }
    else if(flowDirection === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}