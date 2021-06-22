window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", bmiCalc);
};
  
function bmiCalc() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;
  let result = document.getElementById('bmi-result');

  if (height === '' || isNaN(height))
    result.innerHTML = 'Provide a valid Height!';
  else if (weight === '' || isNaN(weight))
    result.innerHTML = 'Provide a valid Weight!';
  else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>${bmi}</span>`;
  }
}