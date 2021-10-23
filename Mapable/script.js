mapboxgl.accessToken = 
 'pk.eyJ1IjoiYXRvbWljZXJyb3JzIiwiYSI6ImNrdXd3ZGs2NjIxZHUydWxucnB6eXg2MDAifQ.deRMw8xzRpHMT_ScmjZpSw';
  
navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, {
        enableHighAccuracy: true
})


function successLocation(position){
    // in mapbox, longitude is taken before latitude
    setupMap([position.coords.longitude, position.coords.latitude]) 
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    map.addControl(new mapboxgl.NavigationControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });
      
    map.addControl(directions, 'top-left');
}
