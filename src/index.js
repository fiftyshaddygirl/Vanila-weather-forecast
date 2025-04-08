function changeCity(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#search-city");
  let searchValue = searchResult.value;
  let city = document.querySelector("#city");
  city.innerHTML = searchValue;
}

let searchForm = document.querySelector("#search-bar");
searchForm.addEventListener("submit", changeCity);
