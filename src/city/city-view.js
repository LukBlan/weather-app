import {Loader} from "../components/loader/loader.js";
import {subscribe} from "../services/pub-sub.js";
import {CityWeatherInfoBuilder} from "./city-weather-info-builder.js";
import { WeatherSectionWrapperFactory } from "../components/wrapper-weather-sections/weather-section-wrapper-factory.js";

const cityViewSection = document.querySelector(".city-weather-display");
const loader = new Loader();
let currentWrapperSection = null;

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);
subscribe("renderLastQueriedCity", renderCurrentWrapper);

function processNewWeatherInfo(newWeatherInfo) {
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  currentWrapperSection = new WeatherSectionWrapperFactory(cityWeatherInfoObject);
  renderCurrentWrapper();
}

function renderCurrentWrapper() {
  const weatherSection = currentWrapperSection.getWrapper();

  loader.getOutScreen(cityViewSection);
  cityViewSection.append(weatherSection);
}

function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}