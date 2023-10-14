import {Loader} from "../loader/loader.js";
import {subscribe} from "../services/pub-sub";

const cityViewSection = document.querySelector(".city-view");
const loader = new Loader();

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);

function processNewWeatherInfo(newWeatherInfo) {
  loader.getOutScreen(cityViewSection);
  console.log(newWeatherInfo);
}

function showLoaderOnScreen() {
  loader.showInScreen(cityViewSection);
}