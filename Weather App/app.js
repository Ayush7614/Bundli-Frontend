

let weather = {
  //use api key
  apiKey: "",
  
  fetchWeather: function (zipcode,countrycode) {
    
    let url="https://api.openweathermap.org/data/2.5/weather?zip=" +
    zipcode+","+countrycode +
    "&units=metric&appid=" +
    this.apiKey;
    
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  fetchWeatherbyCity : function (city){
    let url="https://api.openweathermap.org/data/2.5/weather?q=" +
    city+
    "&units=metric&appid=" +
    this.apiKey;
    console.log(url);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
     document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    var cityname=document.querySelector(".search-bar").value;
    this.fetchWeatherbyCity(cityname);
   // console.log(document.querySelector(".search-bar").value);
  }
};


//for fetching users location
let geocode = {

  reverseGeocode:function(latitude,longitude){
    //use api key
    var api_key = '';
   
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  
    var request_url = api_url
      + '?'
      + 'key=' + api_key
      + '&q=' + encodeURIComponent(latitude + ',' + longitude)
      + '&pretty=1'
      + '&no_annotations=1';
  
    // see full list of required and optional parameters:
    // https://opencagedata.com/api#forward
  
    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);
  
    request.onload = function() {
      
      if (request.status === 200){ 
        // Success!
        var data = JSON.parse(request.responseText);
        let zipcode=data.results[0].components.postcode;
        let countrycode=data.results[0].components.country_code;
        // console.log(zipcode);
        // console.log(countrycode);
        weather.fetchWeather(zipcode, countrycode);
  
      } else if (request.status <= 500){ 
        // We reached our target server, but it returned an error
                             
        console.log("unable to geocode! Response code: " + request.status);
        var data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
      } else {
        console.log("server error");
      }
    };
  
    request.onerror = function() {
      // There was a connection error of some sort
      console.log("unable to connect to server");        
    };
  
    request.send(); 
  },
   getlocation : function(){
     function  success(data){
       geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
     }
     if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, console.error);
    }
    else {
      console.log("error");
     
    }
   }

}
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });


// geocode.getlocation();

document
 .getElementById("html")
 .addEventListener("click",function(event){
   console.log("hi");
   geocode.getlocation();
 });