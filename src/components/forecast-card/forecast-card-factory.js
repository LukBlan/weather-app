import {DateChecker} from "../../services/date-checker";
import "./forecast-card.css"

export {createForecastCard}

function createForecastCard(forecastInfoObject) {
  const container = document.createElement("div");
  const correspondingDayText = createCorrespondingDayText(forecastInfoObject.date);
  const weatherImg = createWeatherImage(forecastInfoObject);
  const minAndMaxWeatherInfo = createMinMaxInfoBox(forecastInfoObject);

  container.classList.add("forecast-card");
  container.append(correspondingDayText);
  container.append(weatherImg);
  container.append(minAndMaxWeatherInfo)
  return container;
}

function createMinMaxInfoBox(forecastInfoObject) {
  const container = document.createElement("div");
  const minMaxBox = document.createElement("p");

  minMaxBox.innerText = `${forecastInfoObject.mintemp_c}° / ${forecastInfoObject.maxtemp_c}°C`
  container.append(minMaxBox);

  return container;
}

function createCorrespondingDayText(date) {
  const paragraph = document.createElement("p");
  const dateChecker = new DateChecker(date);

  paragraph.innerText = dateChecker.checkDate();

  return paragraph;
}

function createWeatherImage(forecastInfoObject) {
  const image = document.createElement("img");

  image.classList.add("forecast-image");
  image.src = forecastInfoObject.icon;

  return image;
}