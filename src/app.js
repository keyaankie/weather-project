function updateWeather(response){
  let temperatureElement = document.querySelector("#temperature");
  let currentTemperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = currentTemperature; 
  let cityElement = document.querySelector("#city"); 
   cityElement.innerHTML = response.data.city;
          
      
 let descriptionElement = document.querySelector("#description");
 let humidityElement = document.querySelector("#humidity");
 let windElement = document.querySelector("#wind");
 let timeElement = document.querySelector("#time");
 let date = new Date(response.data.time * 1000);
 let iconElement = document.querySelector("#icon");
   iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;


 currentDescription = response.data.condition.description;
 currentHumidity = response.data.temperature.humidity;
 currentWindSpeed = response.data.wind.speed;

 descriptionElement.innerHTML = currentDescription;
 humidityElement.innerHTML =  `${currentHumidity}%`;
 windElement.innerHTML = `${currentWindSpeed}km/h`;
 timeElement.innerHTML =  formatDate(date);

getForecast(response.data.city);
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
function getForecast(city) {
  let apiKey = "22afdao0cbf834te6b26411a631e5b10";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
   console.log(response.data);
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
         <div class="weather-forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature-min">9º</div>
          
        </div>
      </div>
    `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml; }

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria");
 
 displayForecast();
 