function updateWeather(response){
  let temperatureElement = document.querySelector("#temperature");
   currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = currentTemperature; 
  let cityElement = document.querySelector("#city"); 
   cityElement.innerHTML = response.data.city;
          
     
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 let timeElement = document.querySelector("#time");
 let date = new Date(response.data.time * 1000);

 currentDescription = response.data.condition.description;
 currentHumidity = response.data.temperature.humidity;
 currentWindSpeed = response.data.wind.speed;

 descriptionElement.innerHTML = currentDescription;
 humidityElement.innerHTML =  `${currentHumidity}%`;
 windElement.innerHTML = `${currentWindSpeed}km/h`;
 timeElement.innerHTML =  formatDate(date);

  





}
function formatDate(date){
 
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[date.getDay()];
  if (hours < 10){
    hours = `0${hours}`;
  }
  if (minutes < 10){
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
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
 