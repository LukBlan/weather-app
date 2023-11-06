import { subscribe } from './pub-sub';
import { createErrorMessageBox } from '../components/error-message-box/error-message-box';

const searchBar = document.querySelector('.search-bar');
let currentErrorMessage = null;

function displayErrorOnSearchBar() {
  const errorMessage = createErrorMessageBox('City Not Found');
  currentErrorMessage = errorMessage;
  searchBar.append(errorMessage);
}

function deleteErrorMessageIfAny() {
  if (currentErrorMessage != null) {
    searchBar.removeChild(currentErrorMessage);
    currentErrorMessage = null;
  }
}

subscribe('cityNotfoundError', displayErrorOnSearchBar);
subscribe('deleteErrorMessageIfAny', deleteErrorMessageIfAny);
