function calculate(){
    var p = 0;
    var r = 0;
    var t = 0;
    var mt = 0;
    var temp;
    var CI = 0;

    p = Number(document.getElementById("principal").value);
    r = Number(document.getElementById("annual-interest-rate").value);
    t = Number(document.getElementById("number-of-years").value);
    temp = document.getElementById("time-period").value;
    if(temp=="yearly") mt=t*1;
    else if(temp=="half-yearly") mt=t*2;
    else if(temp=="quaterly") mt=t*3;
    else if(temp=="monthly") mt=t*12;
    CI = (p*Math.pow(1+(r/(t*100)),mt));
    document.getElementById("res").innerText=CI.toFixed(2);
  }