import {makeApiCall} from "./components/search-city-bar/search-city.js";
import {} from "./services/weather-api-caller.js"
import {} from "./city/city-view.js"
import {} from "./services/error-message-controller.js"
import {} from "./components/temperature-toggle/temperature-toggle.js"
import css from "./styles.css";

// Start webpage displaying london info on screen
makeApiCall(undefined, "London");