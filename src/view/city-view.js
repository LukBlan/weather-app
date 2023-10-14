import {Loader} from "../loader/loader.js";
import {subscribe} from "../services/pub-sub";
import {CitySectionFactory} from "../city-weather/city-section-factory";
import {CityWeatherInfoBuilder} from "../city-weather/city-weather-info-builder.js";

const cityViewSection = document.querySelector(".city-weather-display");
const loader = new Loader();
let currentCityOnScreen = null;

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);

function processNewWeatherInfo(newWeatherInfo) {
  const citySectionFactory = new CitySectionFactory();
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  console.log(cityWeatherInfoObject);
  //const newCityWeatherSection = citySectionFactory.build(cityWeatherInfoObject);
  loader.getOutScreen(cityViewSection);
  //cityViewSection.append(newCityWeatherSection);
  //currentCityOnScreen = newCityWeatherSection;
}

function showLoaderOnScreen() {
  loader.showInScreen(cityViewSection);
}