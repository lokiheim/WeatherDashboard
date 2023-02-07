const apiKey = "08e41f3988dcc8f9767ada1d7e0a7571";
const getCity = document.querySelector(".city"); 
const temperature = document.querySelector(".temp");
const ic = document.querySelector(".icon");
const desc = document.querySelector(".description");
const hum = document.querySelector(".humidity");
const win = document.querySelector(".wind");
let weather_result = {
    fetch_weather: function(city) {
        fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey)
    }
}









// "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey