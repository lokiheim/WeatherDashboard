const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date")


const apiKey = "08e41f3988dcc8f9767ada1d7e0a7571";
const getCity = document.querySelector(".city"); 
const temperature = document.querySelector(".temp");
const ico = document.querySelector(".icon");
const desc = document.querySelector(".description");
const humi = document.querySelector(".humidity");
const win = document.querySelector(".wind");

let weather_result = fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + 'madrid' + "&appid=" + apiKey);
weather_result.then(function (response) {
    return response.json()
}).then(function(data) {
    console.log(data);
    const lat = data[0].lat
    const lon = data[0].lon
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon=" + lon +"&units=metric&appid=" + apiKey).then(function(response){
        return response.json()
    }).then(function(data) {
        console.log(data);
    })
})









// "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey