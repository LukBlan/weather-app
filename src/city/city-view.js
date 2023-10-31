import {Loader} from "../components/loader/loader.js";
import {subscribe} from "../services/pub-sub.js";
import {CityWeatherInfoBuilder} from "./city-weather-info-builder.js";
import { WeatherSectionWrapperFactory } from "../components/wrapper-weather-sections/weather-section-wrapper-factory.js";

const cityViewSection = document.querySelector(".city-weather-display");
const loader = new Loader();
let currentCityWeatherInfo = null;

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);

function processNewWeatherInfo(newWeatherInfo) {
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const wrapperSectionFactory = new WeatherSectionWrapperFactory();

  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  const newExtraInfoSection = wrapperSectionFactory.build(cityWeatherInfoObject);

  currentCityWeatherInfo = cityWeatherInfoObject;
  loader.getOutScreen(cityViewSection);
  cityViewSection.append(newExtraInfoSection);
}

function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}