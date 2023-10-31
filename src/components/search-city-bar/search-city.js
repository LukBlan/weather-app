import {createErrorMessageBox} from "../error-message-box/error-message-box";
import {emit, subscribe} from "../../services/pub-sub.js";
import "./input-city.css"
import "./search-button.css"

export {makeApiCall}

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");
const cityInput = document.getElementById("city-input");

cityInput.addEventListener("keyup", makeApiCallOnEnter);
searchButton.addEventListener("click", makeApiCall);

subscribe("cityNotfoundError", displayErrorOnSearchBar)

function displayErrorOnSearchBar() {
  const errorMessage = createErrorMessageBox("City Not Found");
  searchBar.append(errorMessage)
}

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