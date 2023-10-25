export {CityWeatherInfo}

class CityWeatherInfo {
  constructor() {
    this.forecastInfo = [];
  }

  setInfo(infoObject) {
    this.info = infoObject;
  }

  setExtraInfo(extraInfoObject) {
    this.extraInfo = extraInfoObject;
  }

  addNewForecastInfo(forecastInfo) {
    this.forecastInfo.push(forecastInfo);
  }

}