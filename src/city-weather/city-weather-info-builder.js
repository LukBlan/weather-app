export {CityWeatherInfoBuilder}
import {CityWeatherInfo} from "./city-weather-info.js";

class CityWeatherInfoBuilder {
  constructor() {
    this.cityWeatherObject = new CityWeatherInfo();
  }

  build(cityWeatherInfoJson) {
    this.#setInfo(cityWeatherInfoJson);
    this.#setForecastInfo(cityWeatherInfoJson.forecast)
    this.#setExtraInfo(cityWeatherInfoJson);
    return this.cityWeatherObject;
  }

  #setForecastInfo(forecastInfo) {
    const todayInfo = this.#getDayInfo(forecastInfo.forecastday[0])
    const tomorrowInfo = this.#getDayInfo(forecastInfo.forecastday[1])
    const dayAfterTomorrow = this.#getDayInfo(forecastInfo.forecastday[2])
    console.log(todayInfo)

    this.cityWeatherObject.setTodayInfo(todayInfo);
    this.cityWeatherObject.setTomorrowInfo(tomorrowInfo);
    this.cityWeatherObject.setDayAfterTomorrow(dayAfterTomorrow);
  }

  #getDayInfo(todayWeatherInfo) {
    const dayInfo = {}

    dayInfo.maxtemp_c = todayWeatherInfo.day.maxtemp_c;
    dayInfo.maxtemp_f = todayWeatherInfo.day.maxtemp_f;
    dayInfo.mintemp_c = todayWeatherInfo.day.mintemp_c;
    dayInfo.mintemp_f = todayWeatherInfo.day.mintemp_f;
    dayInfo.text = todayWeatherInfo.day.condition.text;
    dayInfo.icon = todayWeatherInfo.day.condition.icon;

    return dayInfo;
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