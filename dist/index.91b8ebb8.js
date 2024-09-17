const apiKey = "b2f827cd8869e9336cb819c3bf6fbfd8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".card__search__input");
const searchBtn = document.querySelector(".card__search__btn");
const weatherIcon = document.querySelector(".card__weather__icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".card__weather__temp").innerHTML = Math.round(data.main.temp) + "\xb0C";
    document.querySelector(".card__weather__city").innerHTML = data.name;
    document.querySelector(".card__weather__details__col__humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".card__weather__details__col__wind").innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == "Rain") weatherIcon.src = "./images/rain.png";
    else if (data.weather[0].main == "Clouds") weatherIcon.src = "./images/clouds.png";
    else if (data.weather[0].main == "Clear") weatherIcon.src = "./images/clear.png";
    else if (data.weather[0].main == "Snow") weatherIcon.src = "./images/snow.png";
    else if (data.weather[0].main == "Mist") weatherIcon.src = "./images/mist.png";
    else if (data.weather[0].main == "Drizzle") weatherIcon.src = "./images/drizzle.png";
    searchInput.value = "";
    console.log(data);
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
});

//# sourceMappingURL=index.91b8ebb8.js.map
