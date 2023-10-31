import {emit, subscribe} from "./pub-sub";

let lastCityWeatherInfo = null;

// Receive from search-city-bar-view when searching for new city
subscribe("makeWeatherApiCall", makeWeatherApiCall);

async function makeApiCall(cityName) {
  const key = "0b3eed6dfdae45bcbad10452232309"
  const url = `https://api.weatherapi.com/v1/forecast.json?KEY=${key}&q=${cityName}&days=3&hour=12}`
  const response = await fetch(url, {mode: 'cors'})
  const text = await response.text();

  if (!response.ok) {
    throw new Error("City Not Found")
  }
  lastCityWeatherInfo = JSON.parse(text)
  console.log(lastCityWeatherInfo)
  return lastCityWeatherInfo;
}

// Make api call and process result
function makeWeatherApiCall(cityName) {
  makeApiCall(cityName).then(sendNewCityInfo).catch(notifyError)
}

// Send new weather info to city-view to render new info on screen
function sendNewCityInfo(cityObject) {
  emit("newWeatherInfo", cityObject)
}

function notifyError() {
  emit("cityNotfoundError", null)
  emit("newWeatherInfo", lastCityWeatherInfo)
}