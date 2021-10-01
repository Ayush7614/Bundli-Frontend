const covidUrl="https://coronavirus-19-api.herokuapp.com/all"
//Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    show(data)
}
// Calling that async function
getapi(covidUrl);
  
// Function to hide the loader
function show(data) {
    document.getElementById("case-value").innerHTML=(data.cases);
    document.getElementById("death-value").innerHTML=(data.deaths);
    document.getElementById("recovered-value").innerHTML=(data.recovered);
}