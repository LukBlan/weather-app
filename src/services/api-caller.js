import {subscribe} from "./pub-sub";

subscribe("makeApiCall", makeApiCall);

async function makeApiCall(cityName) {
  const key = "0b3eed6dfdae45bcbad10452232309"
  const url = `https://api.weatherapi.com/v1/current.json?KEY=${key}&q=${cityName}}`
  const response = await fetch(url)
  const json = await response.json()
  console.log(json)
}