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
          const currentDay = data.list[0];
          const currentTemp = currentDay.main.temp;
          const currentIcon = currentDay.weather[0].icon;
          const currentHumi = currentDay.main.humidity;
          const currentWind = currentDay.wind.speed;
          getCity.textContent = `Weather in ${cityName}`;
          temperature.textContent = currentTemp;
          ico.setAttribute(
            "src",
            `http://openweathermap.org/img/w/${currentIcon}.png`
          );
          humi.textContent = currentHumi;
          win.textContent = currentWind;

          console.log(currentIcon);
        });
    });
}

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("test");

  var userInput = getWeather(userInput); //"this is where you put the input you targeted";
  //you want ot grab the input box
});

// When the user clicks on the submit button, it should grab the user's city name and input it into the fetch

// "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey
