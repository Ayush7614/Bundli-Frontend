
let techGlobalJson = {};

fetch('../data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                techGlobalJson = data;
                appendTechData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


function appendTechData(data, num) {
console.log("IN", data)
    if (num == undefined) {
        num = 0;
    }

    var imageContainer = document.getElementById("tech-image-container");
    var mainContainer = document.getElementById("tech-content-container");

    if (imageContainer.hasChildNodes() == true) {
        mainContainer.innerHTML = '';
        imageContainer.innerHTML = '';
    }
    var image = document.createElement('div');
    var rest = document.createElement('div');

    console.log("DATA", data,  num);

    image.innerHTML = '<img class="tech-image" src=".' + data['technology'][num]['images']['landscape'] + '" alt="">' + '<img class="tech-image-portrait" src=".' + data['technology'][num]['images']['portrait'] + '" alt="">';
    rest.innerHTML =    '<h4 class="tech-name">' +  data['technology'][num]['name'] + '</h4>' +
                        '<p class="tech-description">' +  data['technology'][num]['description'] + '</p>'; 

    image.classList.add("inner-image-container");
                
    imageContainer.appendChild(image);
    mainContainer.appendChild(rest);
                        
                        
    var numString = num.toString();
    var selectedli;
    var unselectedli;
    var matchArray = [0,1,2];

    for (var i = 0;i < 3;i++ ) {
        if (matchArray[i] == num) {
            selectedli = document.getElementsByClassName(`l${numString}`);
            selectedli[0].classList.add('techSliderActive');
        } else {
            unselectedli = document.getElementsByClassName(`l${matchArray[i]}`);
            unselectedli[0].classList.remove('techSliderActive');
        }
    }
}
const techList = document.querySelector(".tech-list");

techList.addEventListener('click', event => {
    console.log("event.target", event.target, event.target.className)
    if (event.target.className == "tech-list") {
        return;
    } else {
        var num = parseInt(event.target.className[1]);
        appendTechData(techGlobalJson, num);
    }
});
