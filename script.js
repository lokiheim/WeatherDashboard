const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");

const apiKey = "08e41f3988dcc8f9767ada1d7e0a7571";
const getCity = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const ico = document.querySelector(".icon");
const desc = document.querySelector(".description");
const humi = document.querySelector(".humidity");
const win = document.querySelector(".wind");
const searchBtn = document.querySelector(".search-button");
const fiveDaysEl = document.querySelector(".fiveDay");
function getWeather(userInput) {
  let weather_result = fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
      userInput +
      "&appid=" +
      apiKey
  );
  weather_result
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const cityName = data[0].name;
      const lat = data[0].lat;
      const lon = data[0].lon;
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&units=metric&appid=" +
          apiKey
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data.list);
          const currentDay = data.list[0];
          const currentTemp = currentDay.main.temp;
          const currentIcon = currentDay.weather[0].icon;
          const currentHumi = currentDay.main.humidity;
          const currentWind = currentDay.wind.speed;
          getCity.textContent = `Weather in ${cityName}`;
          temperature.textContent = `Current temperature:${currentTemp} °C`;
          ico.setAttribute(
            "src",
            `http://openweathermap.org/img/w/${currentIcon}.png`
          );
          humi.textContent = `Humidity is currently: ${currentHumi}`;
          win.textContent = `Windspeeds of ${currentWind}`;
          for (let i = 8; i < data.list.length; i += 8) {
            const eachDay = data.list[i];
            const card = document.createElement("div");
            const day = document.createElement("h2");
            const temp = document.createElement("p");
            const humdi = document.createElement("p");
            const wind = document.createElement("p");
            const icon = document.createElement("img");

            day.textContent = eachDay.dt_txt;
            temp.textContent = `Temperature: ${eachDay.main.temp}°C`;
            humdi.textContent = `Humidity: ${eachDay.main.humidity}`;
            wind.textContent = `Windspeed: ${eachDay.wind.speed}°C`;
            icon.setAttribute(
              "src",
              `http://openweathermap.org/img/w/${eachDay.weather[0].icon}.png`
            );

            console.log(eachDay);
            card.append(day, temp, humdi, wind, icon);
            fiveDaysEl.append(card);
          }
        });
    });
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");

  const userInput = document.getElementById("search-input").value;
  getWeather(userInput);
  //you want to grab the input box
});

// When the user clicks on the submit button, it should grab the user's city name and input it into the fetch

// "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey
