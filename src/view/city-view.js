import {Loader} from "../components/loader/loader.js";
import {subscribe} from "../services/pub-sub.js";
import {CityWeatherInfoBuilder} from "../city-weather/city-weather-info-builder.js";
import { WeatherSectionWrapperFactory } from "../components/wrapper-weather-sections/weather-section-wrapper-factory";

const cityViewSection = document.querySelector(".city-weather-display"); // Display city's weather info
const loader = new Loader(); // Element with loading animation
let currentCityWeatherInfo = null; // Last city queried by user

// Receive from search-city-view-view when user search for new city
subscribe("makeWeatherApiCall", showLoaderOnScreen);

// Receive from weather-api-caller when info need's to be displayed on screen
subscribe("newWeatherInfo", processNewWeatherInfo);

// Create 2 new dom elements based on weather info received and remove loader from screen
function processNewWeatherInfo(newWeatherInfo) {
  console.log(newWeatherInfo)
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  const wrapperSectionFactory = new WeatherSectionWrapperFactory();
  const newExtraInfoSection = wrapperSectionFactory.build(cityWeatherInfoObject);

  loader.getOutScreen(cityViewSection);
  currentCityWeatherInfo = cityWeatherInfoObject;
  cityViewSection.append(newExtraInfoSection);
}

// Start loader animation on Screen
function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}