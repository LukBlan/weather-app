import './extra-info-section.css';

class ExtraInfoSectionFactory {
  build(extraInfoObject) {
    const extraInfoBox = document.createElement('div');
    const windSpeedInfo = this.#createParagraph(extraInfoObject, 'Wind', 'wind_kph');
    const windDirInfo = this.#createParagraph(extraInfoObject, 'Wind Direction', 'wind_dir');
    const windPressureInfo = this.#createParagraph(extraInfoObject, 'Pressure', 'pressure_mb');
    const windPrecipitationInfo = this.#createParagraph(extraInfoObject, 'Precipitation', 'precip_mm');
    const windHumidityInfo = this.#createParagraph(extraInfoObject, 'Humidity', 'humidity');
    const windCloudInfo = this.#createParagraph(extraInfoObject, 'Visibility', 'vis_km');

    extraInfoBox.classList.add('extra-info-section');
    extraInfoBox.append(windSpeedInfo);
    extraInfoBox.append(windDirInfo);
    extraInfoBox.append(windPressureInfo);
    extraInfoBox.append(windPrecipitationInfo);
    extraInfoBox.append(windHumidityInfo);
    extraInfoBox.append(windCloudInfo);
    return extraInfoBox;
  }

  #createParagraph(weatherObject, word, fieldName) {
    const container = document.createElement('div');
    const title = document.createElement('p');
    const paragraph = document.createElement('p');

    title.innerText = word;
    paragraph.innerText = weatherObject[fieldName];

    container.append(title);
    container.append(paragraph);

    return container;
  }
}

export { ExtraInfoSectionFactory };
