import { emit, subscribe } from './pub-sub';

async function makeApiCall(cityName) {
  const key = '0b3eed6dfdae45bcbad10452232309';
  const url = `https://api.weatherapi.com/v1/forecast.json?KEY=${key}&q=${cityName}&days=3&hour=12}`;
  const response = await fetch(url, { mode: 'cors' });
  const text = await response.text();

  if (!response.ok) {
    throw new Error('City Not Found');
  }
  return JSON.parse(text);
}

// Send new weather info to city-view to render new info on screen
function sendNewCityInfo(cityObject) {
  emit('newWeatherInfo', cityObject);
}

function notifyError() {
  emit('cityNotfoundError', null);
  emit('renderLastQueriedCity', null);
}

// Make api call and process result
function makeWeatherApiCall(cityName) {
  makeApiCall(cityName).then(sendNewCityInfo).catch(notifyError);
}

subscribe('makeWeatherApiCall', makeWeatherApiCall);
