import { DateChecker } from '../../services/date-checker';
import './forecast-card.css';

function createMinMaxInfoBox(forecastInfoObject, temperatureSwitcher) {
  const container = document.createElement('div');
  const minMaxBox = document.createElement('p');

  temperatureSwitcher.addForecastTemperature({
    reference: minMaxBox,
    values: [
      `${forecastInfoObject.mintemp_c} / ${forecastInfoObject.maxtemp_c}`,
      `${forecastInfoObject.mintemp_f} / ${forecastInfoObject.maxtemp_f}`,
    ],
  });

  minMaxBox.innerText = `${forecastInfoObject.mintemp_c} / ${forecastInfoObject.maxtemp_c}`;

  container.append(minMaxBox);

  return container;
}

function createCorrespondingDayText(date) {
  const paragraph = document.createElement('p');
  const dateChecker = new DateChecker(date);

  paragraph.innerText = dateChecker.checkDate();

  return paragraph;
}

function createWeatherImage(forecastInfoObject) {
  const image = document.createElement('img');

  image.classList.add('forecast-image');
  image.src = forecastInfoObject.icon;

  return image;
}

function createForecastCard(forecastInfoObject, temperatureSwitcher) {
  const container = document.createElement('div');
  const correspondingDayText = createCorrespondingDayText(forecastInfoObject.date);
  const weatherImg = createWeatherImage(forecastInfoObject);
  const minAndMaxWeatherInfo = createMinMaxInfoBox(forecastInfoObject, temperatureSwitcher);

  container.classList.add('forecast-card');
  container.append(correspondingDayText);
  container.append(weatherImg);
  container.append(minAndMaxWeatherInfo);
  return container;
}

export { createForecastCard };
