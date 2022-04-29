
let destinationGlobalJson = {};

fetch('../data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                destinationGlobalJson = data;
                appendDestinationData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


function appendDestinationData(data, num) {

    if (num == undefined) {
        num = 0;
    }

    var imageContainer = document.getElementById("planet-container");
    var mainContainer = document.getElementById("body-information");

    if (imageContainer.hasChildNodes() == true) {
        mainContainer.innerHTML = '';
        imageContainer.innerHTML = '';
    }
    var image = document.createElement('div');
    var rest = document.createElement('div');


    image.innerHTML = '<img class="planet-img" src=".' + data['destinations'][num]['images']['png'] + '" alt="">';
    rest.innerHTML = '<h3 class="planet-name">' + data['destinations'][num]['name'] + '</h3>' +
                        '<p class="planet-description">' +  data['destinations'][num]['description'] + '</p>' + '<hr class="destination-line">' +
                        '<div class="info-container">' +
                        '<div class="dist">' +
                        '<h5 class="info-titles">Avg. Distance</h5>' +
                        '<h4 class="planet-distance">' +  data['destinations'][num]['distance'] + '</h4>' +
                        '</div>' + '<div class="time">' + '<h5 class="info-titles">Est. Travel Time</h5>' +
                        '<h4 class="planet-travel">' +  data['destinations'][num]['travel'] + '</h4>' + '</div>' + '</div>'; 

    image.classList.add("planet-image-container");
                  
    imageContainer.appendChild(image);
    mainContainer.appendChild(rest);
                        
                        
   
}

const planetList = document.querySelector(".planet-list");

planetList.addEventListener('click', event => {
    if (event.target.className == "planet-list") {
        return;
    } else {
        var num = parseInt(event.target.className[4]);
        appendDestinationData(destinationGlobalJson, num);
    }
});
