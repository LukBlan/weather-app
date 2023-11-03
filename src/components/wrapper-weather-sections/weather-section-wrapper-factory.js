import { InfoSectionFactory } from "../weather-info-section/info-section-factory";
import { ExtraInfoSectionFactory } from "../weather-extra-info-section/extra-info-section-factory";
import "./weather-section-wrapper.css"

export { WeatherSectionWrapperFactory }

class WeatherSectionWrapperFactory {
  constructor(cityWeatherInfoObject) {
    this.infoSectionFactory = new InfoSectionFactory(cityWeatherInfoObject);
    this.wrapper = this.#build(cityWeatherInfoObject)
  }

  getWrapper() {
    return this.wrapper;
  }

  switchTemperature() {
    this.infoSectionFactory.switchTemperature();
  }

  #build(cityWeatherInfoObject) {
    const wrapper = document.createElement("div");
    const extraInfoFactory = new ExtraInfoSectionFactory();
    const newInfoSection =  this.infoSectionFactory.getInfoSection();
    const extraInfoSection = extraInfoFactory.build(cityWeatherInfoObject.extraInfo);

    wrapper.classList.add("weather-wrapper")
    wrapper.append(newInfoSection);
    wrapper.append(extraInfoSection);

    return wrapper;
  }
}
