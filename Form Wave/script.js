var x = document.getElementById("login-form");
var y = document.getElementById("register-form");
var z = document.getElementById("pointer-btn");
var l = document.getElementById("login");
var r = document.getElementById("register");
var ac = document.getElementById("action_title");

function register(){
x.style.left = "-450px";
y.style.left = "25px";
z.style.left = "215px";
l.style.color = "#2e2e2e";
r.style.color = "#00ffc3";
ac.textContent = "Register";
}

function login(){
x.style.left = "25px";
y.style.left = "450px";
z.style.left = "30px";
l.style.color = "#00ffc3";
r.style.color = "#2e2e2e";
ac.textContent = "Login";
}