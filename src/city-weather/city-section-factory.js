export {CitySectionFactory}

class CitySectionFactory {
  constructor() {
  }

  build(cityWeatherJson) {
    const container = document.createElement("div");
    container.textContent = "Esto es un ejemplo"
    console.log(cityWeatherJson)
    return container;
  }
}