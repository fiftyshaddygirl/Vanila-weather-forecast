function refreshWeather(response) {
  let newTemp = document.querySelector("#temp-value");
  let tempValue = Math.round(response.data.temperature.current);
  newTemp.innerHTML = tempValue;
  let city = document.querySelector("#city");
  let cityValue = response.data.city;
  city.innerHTML = cityValue;
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
