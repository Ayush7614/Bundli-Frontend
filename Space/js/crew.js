
let crewGlobalJson = {};

fetch('../data.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                crewGlobalJson = data;
                appendCrewData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });


function appendCrewData(data, num) {
    if (num == undefined) {
        num = 0;
    }

    //grabs html img and main container
    var imageContainer = document.getElementById("imageLink");
    var mainContainer = document.getElementById("rest-content");

    if (imageContainer.hasChildNodes() == true) {
        mainContainer.innerHTML = '';
        imageContainer.innerHTML = '';
    }

    var image = document.createElement('div');
    var rest = document.createElement('div');

    image.innerHTML = '<img class="crew-image" src=".' + data['crew'][num]['images']['png'] + '" alt="">';
    rest.innerHTML = '<h4 class="role">' + data['crew'][num]['role'] + '</h4>' +
                        '<h4 class="name">' +  data['crew'][num]['name'] + '</h4>' +
                        '<p class="bio">' +  data['crew'][num]['bio'] + '</p>'; 

    image.classList.add("crew-image-container");
               
    imageContainer.appendChild(image);
    mainContainer.appendChild(rest);
                        
    var numString = num.toString();
    var selectedli;
    var unselectedli;
    var matchArray = [0,1,2,3];

    for (var i = 0;i < 4;i++ ) {
        if (matchArray[i] == num) {
            selectedli = document.getElementsByClassName(`li${numString}`);
            selectedli[0].classList.add('myCustomActive');
        } else {
            unselectedli = document.getElementsByClassName(`li${matchArray[i]}`);
            unselectedli[0].classList.remove('myCustomActive');
        }
    }
}

const crewList = document.querySelector(".crew-list");

crewList.addEventListener('click', event => {
    if (event.target.className == "crew-list") {
        return;
    } else {
        var num = parseInt(event.target.className[2]);
        appendCrewData(crewGlobalJson, num);
    }
});
