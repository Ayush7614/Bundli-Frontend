let height = document.getElementById("h_val");
let weight = document.getElementById("w_val");
let gender = document.getElementById("gender");
let bmi = document.getElementById("bmi_value");
let robin_val = document.getElementById("robin_val");
let miller_val = document.getElementById("miller_val");
let bmi_cat = document.getElementById("bmi_category");

//let gender_chk = document.querySelector(input[name="gender"]).checked;

function get_bmi(){
    let bmi_result = parseFloat(weight.value) / parseFloat(height.value * height.value);
    bmi.innerHTML = parseFloat(bmi_result.toFixed(2));

    if (bmi_result < 18.5) 
    {
      bmi_category.innerHTML = "Under Weight";
      bmi_cat.style.color = "blue";
      //bmi_cat.style.fontWeight = "bold";
    } 
    else if (18.5 < bmi_result && bmi_result < 24.9) 
    {
      bmi_category.innerHTML = "Normal Weight";
      bmi_cat.style.color = "green";
    } 
    else if (24.9 < bmi_result && bmi_result < 29.9) 
    {
      bmi_category.innerHTML = "Over Weight";
      bmi_cat.style.color = "orange";
    }
     else if(bmi_result>30)
     {
      bmi_category.innerHTML = "Obese";
      bmi_cat.style.color = "red";
    }

    if(document.getElementById("male").checked)
    {
        let miller_result = 56.2 + 1.41 * (parseFloat(height.value*39.3700787) - 60);
        let robin_result = 52 + 1.9 * (parseFloat(height.value*39.3700787)- 60);

        miller_val.innerHTML = parseFloat(miller_result).toFixed(2)+ " kg";
        robin_val.innerHTML = parseFloat(robin_result).toFixed(2)+ " kg";
    }    
    else if(document.getElementById("female").checked)
    {
        let miller_result = 53.1 + 1.36 * (parseFloat(height.value*39.3700787) - 60);
        let robin_result = 49 + 1.7 * (parseFloat(height.value*39.3700787) - 60);

        miller_val.innerHTML = parseFloat(miller_result).toFixed(2)+ " kg";
        robin_val.innerHTML = parseFloat(robin_result).toFixed(2)+ " kg";
    }

        
    }


    
       
