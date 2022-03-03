const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const getBTN = document.getElementById("get-btn");
const inputBox = document.getElementById("input-box");
const weatherBODY = document.querySelector(".weather-body");

getBTN.addEventListener("click", async function () {
  const input = inputBox.value;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=bab281d79e5f1e9755a68d754cc313e7&q=${input}&units=metric`
  );

  // console.log(response);

  const weather = await response.json();
  // console.log(weather);

  if (weather.cod === "404") {
    alert(weather.message);
  }

  const cardHTML = `
    <div class="location-details">
        <div class="city" id="city">${weather.name}</div>
    </div>
     <div class ="weather-status">
          <div class="temp" id="temp">
              ${weather.main.temp}&deg;C
          </div>
             <div class="min-max" id="min-max">
                 ${weather.main.temp_min} / ${weather.main.temp_max}&deg;C(max)
              </div>
     </div>
    `;

  weatherBODY.style.display = "block";
  weatherBODY.innerHTML = cardHTML;
});