export {LoadingAnimation}

class LoadingAnimation {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.loader = document.querySelector(".loader");
  }

  showInScreen() {
    this.parentElement.append(this.loader);
  }

  getOutScreen() {
    this.parentElement.remove(this.loader);
  }
}