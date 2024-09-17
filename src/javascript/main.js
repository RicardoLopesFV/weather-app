
import rainIcon from '../images/rain.png';
import cloudsIcon from '../images/clouds.png';
import clearIcon from '../images/clear.png';
import snowIcon from '../images/snow.png';
import mistIcon from '../images/mist.png';
import drizzleIcon from '../images/drizzle.png';

const apiKey = "b2f827cd8869e9336cb819c3bf6fbfd8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const cardWeather = document.querySelector(".card__weather")
const searchInput = document.querySelector(".card__search__input")
const searchBtn = document.querySelector(".card__search__btn")
const weatherIcon = document.querySelector(".card__weather__icon")

const weatherTemp = document.querySelector(".card__weather__temp")
const weatherCity = document.querySelector(".card__weather__city")
const weatherHumidity = document.querySelector(".card__weather__details__col__humidity")
const weatherWind = document.querySelector(".card__weather__details__col__wind")

async function checkWeather(city) {

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json()

  weatherTemp.innerHTML = Math.round(data.main.temp) + "°C"
  weatherCity.innerHTML = data.name
  weatherHumidity.innerHTML = data.main.humidity + "%"
  weatherWind.innerHTML = data.wind.speed + " km/h"

  if (data.weather[0].main == "Rain") {

    weatherIcon.src = rainIcon
  } else if (data.weather[0].main == "Clouds") {

    weatherIcon.src = cloudsIcon
  } else if (data.weather[0].main == "Clear") {

    weatherIcon.src = clearIcon
  } else if (data.weather[0].main == "Snow") {

    weatherIcon.src = snowIcon
  } else if (data.weather[0].main == "Mist") {

    weatherIcon.src = mistIcon
  } else if (data.weather[0].main == "Drizzle") {

    weatherIcon.src = drizzleIcon
  }

  searchInput.value = ""

  cardWeather.style.visibility = "visible"
  cardWeather.style.height = "auto"
}

searchInput.addEventListener("keydown", (event) => {

  if (event.key == "Enter") {
    event.preventDefault()
    checkWeather(searchInput.value)
  }
})

searchBtn.addEventListener("click", () => {

  checkWeather(searchInput.value)
})
