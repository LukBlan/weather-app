import "./error-message-box.css"

export {createErrorMessageBox}

function createErrorMessageBox(message) {
  const container = document.createElement("p");
  container.innerText = message
  container.classList.add("error-message")
  return container;
}