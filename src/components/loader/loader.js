import { createLoader } from './loader-factory';

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

export { Loader };
