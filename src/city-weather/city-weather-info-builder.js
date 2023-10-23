export {CityWeatherInfoBuilder}
import {CityWeatherInfo} from "./city-weather-info.js";

class CityWeatherInfoBuilder {
  constructor() {
    this.cityWeatherObject = new CityWeatherInfo();
  }

  build(cityWeatherInfoJson) {
    this.#setInfo(cityWeatherInfoJson);
    this.#setExtraInfo(cityWeatherInfoJson);
    return this.cityWeatherObject;
  }

  #setInfo(cityWeatherInfoJson) {
    const infoObject = {}
    const location =  this.#getLocation(cityWeatherInfoJson.location);
    const temperature = this.#getTemperature(cityWeatherInfoJson.current);
    infoObject.location = location;
    infoObject.temperature = temperature;
    this.cityWeatherObject.setInfo(infoObject);
  }

  #getLocation(locationObject) {
    const location = {}
    location.name = locationObject.name;
    location.region = locationObject.region;
    location.country = locationObject.country;
    return location;
  }

  #getTemperature(currentStatusObject) {
    const temperatureObject = {}
    temperatureObject.temp_c = currentStatusObject.temp_c;
    temperatureObject.temp_f = currentStatusObject.temp_f;
    temperatureObject.condition = currentStatusObject.condition.text;
    temperatureObject.icon = currentStatusObject.condition.icon;
    return temperatureObject;
  }

  #setExtraInfo(cityWeatherInfoJson) {
    const extraInfoObject = {}
    extraInfoObject.wind_mph = cityWeatherInfoJson.current.wind_mph;
    extraInfoObject.wind_dir = cityWeatherInfoJson.current.wind_dir;
    extraInfoObject.precip_mm = cityWeatherInfoJson.current.precip_mm;
    extraInfoObject.humidity = cityWeatherInfoJson.current.humidity;
    extraInfoObject.vis_km = cityWeatherInfoJson.current.vis_km;
    extraInfoObject.pressure_mb = cityWeatherInfoJson.current.pressure_mb;
    this.cityWeatherObject.setExtraInfo(extraInfoObject);
  }
}