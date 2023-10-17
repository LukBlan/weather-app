export {makeApiCall}
import {emit} from "../services/pub-sub.js";

const searchButton = document.querySelector(".search-button");
const cityInput = document.getElementById("city-input");

cityInput.addEventListener("keyup", makeApiCallOnEnter);
searchButton.addEventListener("click", makeApiCall);

function makeApiCallOnEnter(event) {
  const keyPressed = event.key;
  if (keyPressed === "Enter") {
    makeApiCall();
  }
}

function makeApiCall(event, newCity) {
  const cityName = newCity || cityInput.value;
  console.log(cityName)
  if (cityName.length !== 0) {
    emit("makeWeatherApiCall", cityName)
  }
}