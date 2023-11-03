export {TemperatureSwitcher}

class TemperatureSwitcher {
  constructor() {
    this.temperature = null;
    this.forecastList = [];
    this.position = 0;
  }

  switch() {
    this.position = (this.position + 1) % 2
    this.temperature.reference.innerText = this.temperature.values[this.position]
    this.forecastList.forEach(objectCard => {
      objectCard.reference.innerText = objectCard.values[this.position]
    })
  }

  setTemperature(object) {
    this.temperature = object;
  }

  addForecastTemperature(object) {
    this.forecastList.push(object);
  }
}