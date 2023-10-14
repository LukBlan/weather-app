export {CityWeatherInfoBuilder}
import {CityWeatherInfo} from "./city-weather-info.js";

class CityWeatherInfoBuilder {
  constructor() {
    this.cityWeatherObject = new CityWeatherInfo()
  }

  build(cityWeatherInfoJson) {
    this.#setLocation(cityWeatherInfoJson.location)
    this.#setTemperature(cityWeatherInfoJson.current);
    return this.cityWeatherObject;
  }

  #setLocation(locationObject) {
    const location = {}
    location.name = locationObject.name;
    location.region = locationObject.region;
    location.country = locationObject.country;
    this.cityWeatherObject.setLocation(location);
  }

  #setTemperature(currentStatusObject) {
    const temperatureObject = {}
    temperatureObject.celcius = currentStatusObject.temp_c;
    temperatureObject.fahrenheit = currentStatusObject.temp_f;
    temperatureObject.condition = currentStatusObject.condition.text;
    temperatureObject.icon = currentStatusObject.condition.icon;
    this.cityWeatherObject.setTemperature(temperatureObject)
  }
}