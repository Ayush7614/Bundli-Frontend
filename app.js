setInterval(()=>{

 let dd= new Date().getMilliseconds();
 
 let secondd= new Date().getSeconds()

let container= document.getElementById('container');

let heading= document.getElementById('heading');
heading.innerHTML= `<h1 style="color:rgb(${dd}, ${secondd}, ${dd})">Clock</h1>`
},10)
setInterval(()=>{
    let d= new Date().getMilliseconds();
    let hour= new Date().getHours();
    let minute= new Date().getMinutes()
    let second= new Date().getSeconds()
    let dis="AM"
    if(hour>12){

        dis="PM"

    }
    hour-=12;
    console.log(hour);
    console.log(minute)


    container.innerHTML= `<span style= "color: rgb(${d}, ${second}, ${hour})"> ${hour} : ${minute} : ${second}  ${dis} </span>`;
},1000)



