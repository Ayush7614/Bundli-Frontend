var number = document.getElementsByClassName("element");
// console.log(number.value);
var btn = document.querySelector(".click");
btn.addEventListener("click",(e)=>{
    var x = number[0].value;
    document.querySelector(".display").innerText = isPrime(x)?"It is a Prime Number" : "It is not a prime number";
})
number[0].addEventListener("click",()=>{
    document.querySelector(".display").innerText = "";
})
function isPrime(x)
{
    for(let i=2;i<=Math.sqrt(x);i++)
    {
        if(x%i==0)
        {
            return false;
        }
    }
    return true;
}