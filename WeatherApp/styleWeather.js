const apiKey = "YOUR_API_KEY";
// const apiKey = "YOUR_API_KEY_HERE";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


searchBtn.addEventListener("click", () => {
    searchBtn.classList.add("flash-red")
    setTimeout(() => {
        searchBtn.classList.remove("flash-red");
    }, 150);
    checkWeather(searchBox.value);
})

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".error").style.display = "none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/Clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/Clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/Rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/Drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/Mist.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/Snow.png"
        }
        document.querySelector(".weather").style.display = "block";
    }

}



