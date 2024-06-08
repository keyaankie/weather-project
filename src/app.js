function updateWeather(response){
  let temperatureElement = document.querySelector("#temperature");
   currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = currentTemperature; 
  let cityElement = document.querySelector("#city"); 
   cityElement.innerHTML = response.data.city;

}



function searchCity(city){
let apiKey ="22afdao0cbf834te6b26411a631e5b10"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
 axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
 
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria")