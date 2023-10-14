import {emit, subscribe} from "./pub-sub";

subscribe("makeWeatherApiCall", makeWeatherApiCall);

async function makeApiCall(cityName) {
  const key = "0b3eed6dfdae45bcbad10452232309"
  const url = `https://api.weatherapi.com/v1/current.json?KEY=${key}&q=${cityName}}`
  const response = await fetch(url, {mode: 'cors'})

  if (!response.ok) {
    throw new Error("City Not Found")
  }

  return response.json();
}

function makeWeatherApiCall(cityName) {
  makeApiCall(cityName).then(sendNewCityInfo).catch(() => {console.log("error")})
}

function sendNewCityInfo(cityObject) {
  emit("newWeatherInfo", cityObject)
}