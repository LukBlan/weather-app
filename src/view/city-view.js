import {Loader} from "../loader/loader.js";
import {subscribe} from "../services/pub-sub";

const cityViewSection = document.querySelector(".city-view");
const loader = new Loader(cityViewSection);

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);

function processNewWeatherInfo(newWeatherInfo) {
  loader.getOutScreen();
  console.log(newWeatherInfo);
}

function showLoaderOnScreen() {
  loader.showInScreen();
}