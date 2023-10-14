import {LoadingAnimation} from "../services/loading-animation.js";
import {subscribe} from "../services/pub-sub";

const cityViewSection = document.querySelector("section");
const loadingAnimation = new LoadingAnimation(cityViewSection);

subscribe("makeWeatherApiCall", showLoaderOnScreen);
subscribe("newWeatherInfo", processNewWeatherInfo);

function processNewWeatherInfo(newWeatherInfo) {
  loadingAnimation.getOutScreen();
  console.log(newWeatherInfo);
}

function showLoaderOnScreen() {
  loadingAnimation.showInScreen();
}