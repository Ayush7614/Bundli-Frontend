function palindrome(){
    var num = document.querySelector(".inputbox").value.toUpperCase();
//   The code that organises and checks if it is a palindrome
    var alpha = num
        .split('')
        .reverse()
        .join('');
// This is an if statement for when the letters are less than or equal to 2 and an else if statement for when the letters are greater than or equal to 3 and whether or not num is strictly equal to alpha
    if(num.length<=2){
        document.querySelector(".list").innerHTML = "TYPE MORE VALUES"
    }else if(num.length>=3 && num===alpha){
        document.querySelector(".list").innerHTML =`<b>"${num}"</b> is a palindrome!`
    }else{
        document.querySelector(".list").innerHTML =`<b>"${num}"</b> is not a palindrome!`
    }
}
