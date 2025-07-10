const input = document.getElementById("city-input");
const button = document.getElementById("search");
const output = document.getElementById("output");
const condition = document.getElementById("condition");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const img = document.getElementById("img");
const cel =document.getElementById("cel");


function Weather(city) {
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d19add982f375466659a0f6f65b20140&units=metric`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      output.textContent = data.name;
      condition.textContent = data.weather[0].description;
      wind.textContent = `Wind: ${data.wind.speed} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      img.src = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
      img.className="icon"
      cel.textContent=Math.round(data.main.temp) + "C"
    })
}

button.addEventListener("click", () => {
  const city = input.value; // ✅ FIXED: get from `input`, not `output`
  Weather(city);
});
