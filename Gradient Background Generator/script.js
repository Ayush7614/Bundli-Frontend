var css = document.querySelector("textarea");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var btnCopy = document.getElementById("btnCopy");
var body = document.getElementById("gradient");

function setGradient() {
    btnCopy.innerHTML = "Copy";
    btnCopy.classList.remove("active");
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

btnCopy.onclick = str => {
    btnCopy.classList.add("active");
    btnCopy.innerHTML = "Copied!";
    const el = document.createElement("textarea");
    el.value = css.textContent;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);