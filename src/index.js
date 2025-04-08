function refreshWeather(response) {
  let newTemp = document.querySelector("#temp-value");
  let tempValue = Math.round(response.data.temperature.current);
  newTemp.innerHTML = tempValue;

  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;

  let weatherCondition = document.querySelector("#weather-condition");
  weatherCondition.innerHTML = response.data.condition.description;

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `${response.data.temperature.humidity}%`;

  let windSpeed = document.querySelector("#wind");
  windSpeed.innerHTML = `${response.data.wind.speed} km/h`;

  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  time.innerHTML = formatDate(date);

  let icon = document.querySelector("#icon");
  icon.innerHTML = `<img src="${response.data.condition.icon_url}">`;

  console.log(response.data);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}, `;
}

function searchCity(city) {
  let apiKey = "940836f57095o1a5bt3c042d91bb08f9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function changeCity(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#search-city");
  let searchValue = searchResult.value;
  let city = document.querySelector("#city");
  city.innerHTML = searchValue;
  searchCity(searchResult.value);
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", changeCity);

searchCity("Sydney");

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="weather-forecast">
      <div class="forecast-day">${day}</div>
      <div class="forecast-icon">🌧️</div>
      <div class="forecast-temp">
        <div class="temperature-value"><strong>15°</strong></div>
        <div class="temperature-value">9°</div>
      </div>
    </div>`;
  });
  let forecast = document.querySelector("#forecast");
  forecast.innerHTML = forecastHtml;
}

displayForecast();
