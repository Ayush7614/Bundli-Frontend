console.log("this is a paragraph");
let name = new Array (1, 2, 45, 32, "aritra", null);
let name1 = new Array(40);
// console.log(name.push("this is pushed"));
name.push("This is Pushed");
console.log(name);
let boy1 = "harry";
let boy2="aritra";
let boy3="koushik";
let boy4="rishab";
greet (boy1);
greet (boy2);
greet (boy3);
greet (boy4);
function greet(toy){
    console.log(toy);
}
let main = document.getElementById("container2");
console.log(main);
let class1 = document.getElementsByClassName("container1");
console.log(class1);


// let container1 = document.querySelector(`.container1`);
// let container1_img = document.querySelector(`#container1_img`);

// container1.addEventListener(`mouseover`, function a(){
//   container1_img.style.box-shadow = `none`
// });