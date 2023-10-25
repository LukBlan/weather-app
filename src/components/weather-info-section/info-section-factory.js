import "./info-section.css"
import {createForecastCard} from "../forecast-card/forecast-card-factory";

export {InfoSectionFactory}

class InfoSectionFactory {
  build(cityWeatherInfoObject) {
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
      const forecastCard = createForecastCard(forecastObject);
      container.append(forecastCard)
    })

    return container;
  }

}