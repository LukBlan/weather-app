export {InfoSectionFactory}

class InfoSectionFactory {
  build(cityWeatherInfoObject) {
    const infoBox = document.createElement("div");
    const locationBox = this.#createLocationBox(cityWeatherInfoObject.location);
    const temperatureBox = this.#createTemperatureBox(cityWeatherInfoObject.temperature);

    infoBox.classList.add("info-section")
    infoBox.append(locationBox);
    infoBox.append(temperatureBox)

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
    locationRegion.innerText = locationObject.region;
    locationCountry.innerText = locationObject.country;

    locationBox.append(locationName);
    locationBox.append(locationRegion);
    locationBox.append(locationCountry);
    return locationBox;
  }

}