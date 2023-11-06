import './error-message-box.css';

function createErrorMessageBox(message) {
  const container = document.createElement('p');
  container.innerText = message;
  container.classList.add('error-message');
  return container;
}

export { createErrorMessageBox };
