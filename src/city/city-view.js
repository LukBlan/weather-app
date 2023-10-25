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
  console.log(newWeatherInfo)
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  const wrapperSectionFactory = new WeatherSectionWrapperFactory();
  const newExtraInfoSection = wrapperSectionFactory.build(cityWeatherInfoObject);

  loader.getOutScreen(cityViewSection);
  currentCityWeatherInfo = cityWeatherInfoObject;
  cityViewSection.append(newExtraInfoSection);
}

function showLoaderOnScreen() {
  cityViewSection.innerHTML = "";
  loader.showInScreen(cityViewSection);
}