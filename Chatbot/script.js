const inptext=document.getElementById('textmg');
const sendbutton=document.querySelector('.png')
const anime=document.querySelector('.msgloading');
const contentsection=document.querySelector('.content');
const userInfo=['94839338##','samarthskadam14@gmail.com','Samarth kadam','This is out of my scope','Thank you','Yes,Mr Chatbot '];
let msginfo;
console.log(userInfo);
let count=0;

///This is initial message that happens first
///message is the class and theme of the bot ,user is the class of the usermessages and it has its theme

var x = document.getElementById("myAudio");
function playAudio() { 
    x.play(); 
  } 

function Animation()
{
    const initial=setTimeout(function(){

        anime.classList.remove('dis');
    }, 1000);
    setTimeout(function(){
        anime.classList.add('dis');
        clearTimeout(initial);
        
    }, 3000);
}

function Botcommands(msg){
    count++;
    setTimeout(function()
    {
        playAudio();
    const html=`<div class="madi"><div class="message new${count}">${msg}</div></div>`///message
    contentsection.insertAdjacentHTML('beforeend',html);
    let desel=document.querySelector(`.new${count}`);;////////////////////Updated CODE
    desel.scrollIntoView();
},3000);
}

function addusersMsg(msg){
    count++;
    if(msg==='')
    {
        alert("TEXTINPUT is emtpy please write something revelant");
        return ;
    }
    let message=`<div class="need"><div class="user new${count}">${msg}</div></div>`;
    contentsection.insertAdjacentHTML('beforeend',message);
    Animation();
    let desel=document.querySelector(`.new${count}`);////////////////////Updated CODE
    desel.scrollIntoView();
//   contentsection.scrollTo(0,desel.getBoundingClientRect().top ) ///Updated CODE
    inptext.value='';

    let str=msg;
    let one=str.toLowerCase();
    let Arr=one.split(' ');
    console.log(Arr);
    if(Arr.includes('phone')||Arr.includes('contact')||Arr.includes('number'))
    {
Botcommands('Here it is 9483938**');
    }
    else if(Arr.includes('hello')||Arr.includes('hi')||Arr.includes('who'))
    {
        Botcommands('Hello,this is Mr chatbot speaking');
    }
    else if(Arr.includes('email'))
    {
        Botcommands('Here samarthskadam14@');
    }
    else if(Arr.includes('thank')||Arr.includes('bye'))
    {
        Botcommands('Its my pleasure to have a talk with you');
    }
    else if(Arr.includes('full name')||Arr.includes('name'))
    {
        Botcommands('Samarth Kadam');
    }
    else{
        Botcommands('Sorry, this is out of my reach');
    }

}


function addHello(){
    playAudio()
    let html=`<div class="message new">Hello, how may I help you ?</div>`///message
    contentsection.insertAdjacentHTML('beforeend',html);
    Animation();
    setTimeout(function()
    {
        playAudio();
    html=`<div class="message new">You can ask me about contact, email, and info of Samarth </div>`;
    contentsection.insertAdjacentHTML('beforeend',html);
    },3000);

}

const initial=setTimeout(function(){

    anime.classList.remove('dis');
}, 1000);
setTimeout(function(){
    anime.classList.add('dis');
    clearTimeout(initial);
     addHello();
    
}, 3000);

sendbutton.addEventListener('click',function(){
    msginfo=inptext.value;
    addusersMsg(msginfo);
    
})

document.addEventListener('keydown',function(e){
    if(e.key==='Enter')
    {
    msginfo=inptext.value;
    addusersMsg(msginfo);
    }
    else{
        return;
    }
})















///1st step is to hover the element and message the  user about ANY STUFF   REquired?
///Bot should ask the user that =Hello ,How may I help you
//So there are two way two types of text if bot text the color of the inserting adjacent html should be differnt color and user should be different and even about that small arrow

// This is pop up song section