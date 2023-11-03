import "./info-section.css"
import {createForecastCard} from "../forecast-card/forecast-card-factory";
import {TemperatureSwitcher} from "../../temperature/temperature-switcher";

export {InfoSectionFactory}

class InfoSectionFactory {
  constructor(cityWeatherInfoObject) {
    this.temperatureSwitcher = new TemperatureSwitcher();
    this.infoSection = this.#build(cityWeatherInfoObject);
  }

  getInfoSection() {
    return this.infoSection;
  }

  switchTemperature() {
    this.temperatureSwitcher.switch();
  }

  #build(cityWeatherInfoObject) {
    const infoBox = document.createElement("div");
    const locationBox = this.#createLocationBox(cityWeatherInfoObject.info.location);
    const temperatureBox = this.#createTemperatureBox(cityWeatherInfoObject.info.temperature);
    const forecastBox = this.#createForecastBox(cityWeatherInfoObject.forecastInfo);

    infoBox.classList.add("info-section")
    infoBox.append(locationBox);
    infoBox.append(temperatureBox)
    infoBox.append(forecastBox);

    return infoBox;
  }

  #createTemperatureBox(temperature) {
    const temperatureBox = document.createElement("p");

    temperatureBox.innerText = temperature.temp_c;
    temperatureBox.classList.add("temperature")

    this.temperatureSwitcher.setTemperature({
      reference: temperatureBox,
      values: [temperature.temp_c, temperature.temp_f]
    })

    return temperatureBox;
  }

  #createLocationBox(locationObject) {
    const locationBox = document.createElement("div");
    const locationName = document.createElement("h2");
    const locationRegion = document.createElement("p");
    const locationCountry = document.createElement("p");

    locationName.innerText = locationObject.name;
    locationName.classList.add("city-name");
    locationRegion.innerText = locationObject.region;
    locationCountry.innerText = locationObject.country;

    locationBox.append(locationName);
    locationBox.append(locationRegion);
    locationBox.append(locationCountry);
    return locationBox;
  }

  #createForecastBox(forecastList) {
    const container = document.createElement("div");

    container.classList.add("forecast-card-list");
    forecastList.forEach(forecastObject => {
      const forecastCard = createForecastCard(forecastObject, this.temperatureSwitcher);
      container.append(forecastCard)
    })

    return container;
  }

}