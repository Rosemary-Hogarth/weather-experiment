let currentDate = new Date();
let h1 = document.querySelector("h1");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let time = currentDate.getHours();
let minutes = currentDate.getMinutes();

if (minutes < 10) {
  minutes = `0${minutes}`;
}

h1.innerHTML = `${day} ${time}:${minutes}`;

function showCityName(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search");
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${citySearch.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", showCityName);

function showFahrenheit(event) {
  event.preventDefault();
  let tempSearch = document.querySelector("#button");
  let p = document.querySelector("p");
  let celcius = 30;
  let fahrenheit = (celcius * 9) / 5 + 32;
  p.innerHTML = `${fahrenheit}`;
}

let button = document.querySelector("#button");
button.addEventListener("click", showFahrenheit);

function showCelcius(event) {
  event.preventDefault();
  let tempFind = document.querySelector("#press");
  let p = document.querySelector("p");
  let celcius = 30;
  p.innerHTML = `${celcius}`;
}

let press = document.querySelector("#press");
press.addEventListener("click", showCelcius);
