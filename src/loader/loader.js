export {Loader}
import {createLoader} from "./loader-factory.js";

class Loader {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.loader = createLoader();
  }

  showInScreen() {
    console.log(this.parentElement)
    console.log(this.loader)
    this.parentElement.append(this.loader);
  }

  getOutScreen() {
    this.parentElement.removeChild(this.loader);
  }
}