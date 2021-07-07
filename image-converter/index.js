function loadFile(event) {
    const tempURL = URL.createObjectURL(event.target.files[0]);
    document.getElementById("text").style.backgroundImage = `url(${tempURL})`;
    document.getElementById("input").style.visibility = "hidden";
    document.getElementById("title").style.visibility = "hidden";
}