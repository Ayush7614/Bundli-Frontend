// Weight
let kg = document.getElementById("kg-text");
let grams = document.getElementById("gram-text");
let pounds = document.getElementById("lb-text");
let ounces = document.getElementById("oz-text");

function ConvKG(){
    let gram_result = (parseFloat(kg.value)*1000);
    grams.value = parseFloat(gram_result.toFixed(2));
    //console.log(gram_result);

    let lb_result = (parseFloat(kg.value)*2.20462262);
    pounds.value = parseFloat(lb_result.toFixed(2));
    //console.log(lb_result);

    let oz_result = (parseFloat(kg.value)*35.2739619);
    ounces.value = parseFloat(oz_result.toFixed(2));
    //console.log(oz_result);
}

// Temperature

let celius = document.getElementById("cel-text");
let fahrenheit = document.getElementById("fah-text");
let kelvin = document.getElementById("kel-text");

function ConvCEL(){
    let fah_result = (parseFloat(celius.value)*1.8)+32
    fahrenheit.value = parseFloat(fah_result.toFixed(2));

    let kel_result = (parseFloat(celius.value)+273.15)
    kelvin.value = parseFloat(kel_result.toFixed(2));
}

// Length

let meter = document.getElementById("meter-text");
let kilometer = document.getElementById("kilom-text");
let inches = document.getElementById("inches-text");
let centimeter = document.getElementById("centi-text");
let feet = document.getElementById("feet-text");
let milimeter = document.getElementById("mili-text")


function ConvMET(){
    let kilom_result = (parseFloat(meter.value)/1000.0);
    kilometer.value = parseFloat(kilom_result);

    let inches_result = (parseFloat(meter.value)*39.3700787);
    inches.value = parseFloat(inches_result.toFixed(2));

    let centimeter_result = (parseFloat(meter.value)*100);
    centimeter.value = parseFloat(centimeter_result.toFixed(2));

    let feet_result = (parseFloat(meter.value)*3.2808399);
    feet.value = parseFloat(feet_result.toFixed(2));

    let milimeter_result = (parseFloat(meter.value)*1000.0);
    milimeter.value = parseFloat(milimeter_result.toFixed(2));

}

// Time

let hr = document.getElementById("hr-text");
let min = document.getElementById("min-text");
let sec = document.getElementById("sec-text");

function ConvHR(){
    let minutes_result = (parseFloat(hr.value)*60.0);
    min.value = parseFloat(minutes_result.toFixed(2));

    let seconds_result = (parseFloat(hr.value)*3600.0);
    sec.value = parseFloat(seconds_result.toFixed(2));
}

