export {Loader}
import {createLoader} from "./loader-factory.js";

class Loader {
  constructor() {
    this.loader = createLoader();
  }

  showInScreen(parentElement) {
    parentElement.append(this.loader);
  }

  getOutScreen(parentElement) {
    parentElement.removeChild(this.loader);
  }
}