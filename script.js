var button = document.getElementById("button");
var input = document.getElementById("input");
let para = document.getElementById("result");
var welcome = document.getElementById("welcome");
let image = document.getElementById("image");
button.addEventListener("click", getRegion);
function getRegion() {
  var value = input.value;
  getWeather(value);
}

function getWeather(region) {
  var api_link = `http://api.weatherapi.com/v1/current.json?key=52f7ed3e787845b7bf894652240407&q=${region}&aqi=no`;
  console.log(api_link);
  fetch(api_link)
    .then(response => response.json())
    .then(handleResponse)
    .catch(error => {
      console.error("Error fetching the weather data:", error);
      para.innerText = "Error fetching the weather data.";
    });
}

function handleResponse(value) {
    console.log(value);
    para.innerText = `Its ${value.current.temp_c} degree celsius outside. 
    Humidity is ${value.current.humidity} %. 
    Overall the condition is: ${value.current.condition.text}`;
  );
}

function getCurrentTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var meridiem = hours < 12 ? "AM" : "PM";

  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var currentTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;

  return currentTime;
}

function displayWelcomeMessage() {
  var welcomeMessage = "Welcome!! The current time is: " + getCurrentTime();
  document.getElementById("welcome").textContent = welcomeMessage;
}

window.onload = function () {
  displayWelcomeMessage();
};
setInterval(displayWelcomeMessage, 1000);
