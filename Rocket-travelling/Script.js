document.addEventListener("mousemove", (e) => {
  document.querySelector(".rocket ").style.top = e.offsetY + "px";
  document.querySelector(".rocket ").style.left = e.offsetX + "px";
});
