import { makeApiCall } from './components/search-city-bar/search-city';
import {} from './services/weather-api-caller';
import {} from './city/city-view';
import {} from './services/error-message-controller';
import {} from './components/temperature-toggle/temperature-toggle';
import {} from './styles.css';

// Start webpage displaying london info on screen
makeApiCall(undefined, 'London');
