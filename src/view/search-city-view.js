import css from "./../styles.css";
import {emit, subscribe} from "../services/pub-sub.js";
import {} from "../services/weather-api-caller.js"
import {} from "./city-view.js"

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

function makeApiCall() {
  const cityName = cityInput.value;
  if (cityName.length !== 0) {
    emit("makeWeatherApiCall", cityName)
  }
}