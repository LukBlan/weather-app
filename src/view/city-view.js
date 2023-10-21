import {Loader} from "../components/loader/loader.js";
import {subscribe} from "../services/pub-sub";
import {CityWeatherSectionFactory} from "../city-weather/city-weather-section-factory";
import {CityWeatherInfoBuilder} from "../city-weather/city-weather-info-builder.js";

const cityViewSection = document.querySelector(".city-weather-display"); // Display city's weather info
const loader = new Loader(); // Element with loading animation
let currentCityWeatherInfo = null; // Last city queried by user

// Receive from search-city-view-view when user search for new city
subscribe("makeWeatherApiCall", showLoaderOnScreen);

// Receive from weather-api-caller when info need's to be displayed on screen
subscribe("newWeatherInfo", processNewWeatherInfo);

// Create 2 new dom elements based on weather info received and remove loader from screen
function processNewWeatherInfo(newWeatherInfo) {
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const citySectionFactory = new CityWeatherSectionFactory();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  const newWeatherElements = citySectionFactory.build(cityWeatherInfoObject);

  loader.getOutScreen(cityViewSection);
  currentCityWeatherInfo = cityWeatherInfoObject;
  render(newWeatherElements)
}

function render(newWeatherElements) {
  cityViewSection.append(newWeatherElements.info);
  cityViewSection.append(newWeatherElements.extraInfo);
}

// Start loader animation on Screen
function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}