export {makeApiCall}
import {emit} from "../../services/pub-sub.js";
import "./input-city.css"
import "./search-button.css"

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

// Get city name from input and send to weather-api-caller (to make api call) and city-view (to start loader animation)
function makeApiCall(event, newCity) {
  const cityName = newCity || cityInput.value;

  if (cityName.length !== 0) {
    emit("makeWeatherApiCall", cityName)
  }
}