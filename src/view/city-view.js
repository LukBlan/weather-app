import {Loader} from "../loader/loader.js";
import {subscribe} from "../services/pub-sub";
import {CityWeatherSectionFactory} from "../city-weather/city-weather-section-factory";
import {CityWeatherInfoBuilder} from "../city-weather/city-weather-info-builder.js";

const cityViewSection = document.querySelector(".city-weather-display");
const loader = new Loader();
let currentCityWeatherInfo = null;

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);

function processNewWeatherInfo(newWeatherInfo) {
  const citySectionFactory = new CityWeatherSectionFactory();
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  const newCityWeatherSection = citySectionFactory.build(cityWeatherInfoObject);
  loader.getOutScreen(cityViewSection);
  cityViewSection.append(newCityWeatherSection);
  currentCityWeatherInfo = cityWeatherInfoObject;
}

function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}