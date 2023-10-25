import { InfoSectionFactory } from "../info-section-view/info-section-factory";
import { ExtraInfoSectionFactory } from "../extra-info-section-view/extra-info-section-factory";
import "./weather-section-wrapper.css"

export { WeatherSectionWrapperFactory }

class WeatherSectionWrapperFactory {
  build(cityWeatherInfoObject) {
    const wrapper = document.createElement("div");
    const infoSectionFactory = new InfoSectionFactory();
    const extraInfoFactory = new ExtraInfoSectionFactory();
    const newInfoSection = infoSectionFactory.build(cityWeatherInfoObject.info);
    const extraInfoSection = extraInfoFactory.build(cityWeatherInfoObject.extraInfo);

    wrapper.classList.add("weather-wrapper")
    wrapper.append(newInfoSection);
    wrapper.append(extraInfoSection);

    return wrapper;
  }
}
