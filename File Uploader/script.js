const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; // global variables declared

// browse code button
button.onclick = () => {
  input.click();
}

input.addEventListener("change", function() {
  file = this.files[0];
  dropArea.classList.add("active");
  showFile();
});
//drag over the image
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  dragText.textContent = 'Release to Upload'; // alert
});
//when cursor will leave
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  dragText.textContent = 'Drag and drop the file'; // drag the alert
});

dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();// file/image show
});
function showFile() {
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //file extensions
  if(validExtensions.includes(fileType)) {
    let fileReader = new FileReader(); // new file image add
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="" >`; // image tag
      dropArea.innerHTML = imgTag;
  }
    fileReader.readAsDataURL(file);
  }else{
    dropArea.classList.remove("active");
    dragText.textContent = 'Drag and drop to upload file';
  }
}
