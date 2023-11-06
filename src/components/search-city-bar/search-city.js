import { emit } from '../../services/pub-sub';
import './input-city.css';
import './search-button.css';

const searchButton = document.querySelector('.search-button');
const cityInput = document.getElementById('city-input');

function makeApiCall(event, newCity) {
  const cityName = newCity || cityInput.value;

  if (cityName.length !== 0) {
    emit('deleteErrorMessageIfAny', null);
    emit('makeWeatherApiCall', cityName);
  }
}

function makeApiCallOnEnter(event) {
  const keyPressed = event.key;
  if (keyPressed === 'Enter') {
    makeApiCall();
  }
}

cityInput.addEventListener('keyup', makeApiCallOnEnter);
searchButton.addEventListener('click', makeApiCall);

export { makeApiCall };
