const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet= document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink= document.querySelector(".pink");

const center = document.querySelector(".center");



// console.log(window.getComputedStyle(red).background);

const getBGColor=(selectedElements) => {
    return window.getComputedStyle(selectedElements).backgroundColor;

}

 var color =getBGColor(orange);


 orange.addEventListener("click" ,() => {
    center.style.background = organeELementColor; 
 });

 const colorPoper = (element, color) =>{
   element.addEventListener("mouseenter" ,() => {
        center.style.background = color; 
     });
 }


  colorPoper(red, getBGColor(red));
  colorPoper(cyan, getBGColor(cyan));
  colorPoper(violet, getBGColor(violet));
  colorPoper(orange, getBGColor(orange));
  colorPoper(pink, getBGColor(pink));
  colorPoper(red, getBGColor(red));












 