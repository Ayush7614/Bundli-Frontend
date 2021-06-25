var reviewsList = [
  {
    name: "Susan Smith",
    job : "Web Developer",
    image: "https://news.ucar.edu/sites/default/files/staffnotes/2008/jaclyn.jpg",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, at dicta dolor nisi, a possimus, porro excepturi, ut recusandae impedit doloribus quo eos. Optio nesciunt praesentium maiores aperiam suscipit velit voluptatem doloremque."
  },
  {
    name: "Anna Johnson",
    job: "Web Designer",
    image: "https://imgix.bustle.com/uploads/shutterstock/2020/12/14/78bdc21a-7007-4021-89bc-754dee63c809-shutterstock-1027279291.jpg?w=1200&fit=crop&crop=faces&auto=format%2Ccompress",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni quod recusandae illum? Eum nihil, eos dolore eligendi illo quidem praesentium minus, pariatur animi vel earum placeat dignissimos ducimus a at temporibus."
  },
  {
    name: "Peter Jones",
    job: "Intern",
    image: "https://www.eaglewharfmarina.com/wp-content/uploads/2018/11/james-union.jpeg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Soluta beatae delectus totam maxime obcaecati aspernatur, exercitationem, dolores maiores voluptatum illo ullam, eligendi eos voluptas esse quaerat, consectetur debitis sint ipsam. Aperiam, iusto."
  },
  {
    name: "Bill Anderson",
    job: "The Boss",
    image: "https://images.unsplash.com/profile-1543325371198-ac1cf0c9bb2e?auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore accusantium quis, sapiente, fugit quae, reiciendis corrupti assumenda eius qui, omnis non! Sunt, facilis consequatur error autem facere? Dolorum deleniti ea quasi accusantium."
  },
  {
    name: "Sara Jones",
    job: "UX Designer",
    image: "https://womeninamerica.org/images/profiler/avatar366_da0eef1f6326301e1aaa7b66d89f5041.jpg",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil et inventore rem in, aperiam nesciunt quod neque? Vero molestiae, sed sapiente temporibus nam aut ex, non totam excepturi vel odio? Similique, deleniti!"
  }
]

var currentReviewNo = 0;

window.addEventListener("DOMContentLoaded" , function() {
  setReviewDetails(currentReviewNo);
});

var nextButton = document.querySelector(".right");
var prevButton = document.querySelector(".left");

var button = document.querySelector(".btn");

var title = document.querySelector(".title");
var jobTitle = document.querySelector(".job-title");
var image = document.querySelector("img");
var description = document.querySelector(".description");
var border = document.querySelector("hr");

var hexCode = null;

button.addEventListener("click" , function () {
    hexCode = generateRandomHexCode();
    setColor(hexCode);
});

button.addEventListener("mouseenter" , function (event) {
    setButtonHover(event , hexCode);
});

button.addEventListener("click" , function (event) {
    setButtonHover(event , hexCode);
});

button.addEventListener("mouseout" , function (event) {
    removeButtonHover(event , hexCode);
});

function setColor(hexCode) {

    border.style.backgroundColor = hexCode;
    jobTitle.style.color = hexCode;
    nextButton.style.color = hexCode;
    prevButton.style.color = hexCode;

    button.style.borderColor = hexCode;
    button.style.color = hexCode;
    image.style.boxShadow = "3px -6px 1px " + hexCode;
    image.style.borderRight = "5px solid" + hexCode;

}

var whiteColor = "#fff";

function setButtonHover(event , hexCode) {

    event.target.style.backgroundColor = hexCode;
    event.target.style.color = whiteColor;

}

function removeButtonHover(event , hexCode) {

    event.target.style.backgroundColor = whiteColor;
    event.target.style.color = hexCode;
}

function generateRandomHexCode() {

    var hexCode = "#";

    for(var i = 0; i < 6; i++) {

        var randomNumber = Math.floor(Math.random() * 15) + 1;
        if(randomNumber <= 9) {
            hexCode += randomNumber;
        } else {
            var alpha = generateAlpha(randomNumber);
            hexCode += alpha;
        }

    }
    
    return hexCode;
}

function generateAlpha(randomNumber) {

    var alpha = "";

    switch(randomNumber) {
        case 10: alpha = "A";
            break;
        case 11: alpha = "B";
            break;
        case 12: alpha = "C";
            break;
        case 13: alpha = "D";
            break;
        case 14: alpha = "E";
            break;
        case 15: alpha = "F";
            break;
    }

    return alpha;
}

nextButton.addEventListener("click" , function () {
  if(currentReviewNo == reviewsList.length - 1) {
    currentReviewNo = 0;
  } else {
    currentReviewNo++; 
  }
  setReviewDetails(currentReviewNo);
});

prevButton.addEventListener("click" , function() {
   if(currentReviewNo == 0) {
     currentReviewNo = reviewsList.length - 1;
   } else {
     currentReviewNo--;
   }
    setReviewDetails(currentReviewNo);
});

function setReviewDetails(currentReviewNo) {
  
  title.textContent = reviewsList[currentReviewNo].name;
  jobTitle.textContent = reviewsList[currentReviewNo].job;
  image.src = reviewsList[currentReviewNo].image;
  description.textContent = reviewsList[currentReviewNo].description;
}