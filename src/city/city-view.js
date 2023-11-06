import { Loader } from '../components/loader/loader';
import { subscribe } from '../services/pub-sub';
import { CityWeatherInfoBuilder } from './city-weather-info-builder';
import { WeatherSectionWrapperFactory } from '../components/wrapper-weather-sections/weather-section-wrapper-factory';

const cityViewSection = document.querySelector('.city-weather-display');
const loader = new Loader();
let currentWrapperSection = null;

function renderCurrentWrapper() {
  const weatherSection = currentWrapperSection.getWrapper();

  loader.getOutScreen(cityViewSection);
  cityViewSection.append(weatherSection);
}

function processNewWeatherInfo(newWeatherInfo) {
  const cityWeatherInfoBuilder = new CityWeatherInfoBuilder();
  const cityWeatherInfoObject = cityWeatherInfoBuilder.build(newWeatherInfo);
  currentWrapperSection = new WeatherSectionWrapperFactory(cityWeatherInfoObject);
  renderCurrentWrapper();
}
function toggleTemperature() {
  currentWrapperSection.switchTemperature();
}

function showLoaderOnScreen() {
  cityViewSection.innerHTML = '';
  loader.showInScreen(cityViewSection);
}

subscribe('makeWeatherApiCall', showLoaderOnScreen);
subscribe('newWeatherInfo', processNewWeatherInfo);
subscribe('renderLastQueriedCity', renderCurrentWrapper);
subscribe('switchTemperature', toggleTemperature);
