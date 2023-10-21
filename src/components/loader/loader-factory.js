export {createLoader}
import "./loader.css"

function createLoader() {
  const loader = document.createElement("div");
  loader.classList.add("loader");
  return loader;
}