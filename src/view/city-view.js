import {Loader} from "../components/loader/loader.js";
import {subscribe} from "../services/pub-sub.js";
import {InfoSectionFactory} from "../components/info-section-view/info-section-factory.js";
import {CityWeatherInfoBuilder} from "../city-weather/city-weather-info-builder.js";
import {ExtraInfoSectionFactory} from "../components/extra-info-section-view/extra-info-section-factory.js";

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
  const infoSectionFactory = new InfoSectionFactory();
  const extraInfoFactory = new ExtraInfoSectionFactory();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  const newInfoSection = infoSectionFactory.build(cityWeatherInfoObject.info);
  const newExtraInfoSection = extraInfoFactory.build(cityWeatherInfoObject.extraInfo);


  loader.getOutScreen(cityViewSection);
  currentCityWeatherInfo = cityWeatherInfoObject;
  render(newInfoSection, newExtraInfoSection)
}

function render(newInfoSection, extraInfoSection) {
  cityViewSection.append(newInfoSection);
  cityViewSection.append(extraInfoSection);
}

// Start loader animation on Screen
function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}