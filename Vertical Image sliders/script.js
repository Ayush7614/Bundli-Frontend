const mainSlider = document.querySelector('.mainSlider')
const rightSlider = document.querySelector('.right-slide')
const leftSlider = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = rightSlider.querySelectorAll('div').length

let previewSlide =0
leftSlider.style.top = `-${(slidesLength - 1)*100}vh`
upButton.addEventListener('click',()=> changeSlide('up'))
downButton.addEventListener('click',()=> changeSlide('down'))


const changeSlide = (direction)=>{
    const sliderHeight = mainSlider.clientHeight

    if(direction ==='up'){
        previewSlide++
        if(previewSlide > slidesLength -1)
        {
            previewSlide = 0
        }
    }else if(direction ==='down'){
        previewSlide--
        if(previewSlide <0)
        {
            previewSlide = slidesLength-1
        }
    }

    rightSlider.style.transform = `translateY(-${previewSlide*sliderHeight}px)`
    leftSlider.style.transform = `translateY(${previewSlide*sliderHeight}px)`
}