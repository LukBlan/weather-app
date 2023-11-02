import "./temperature-toggle.css"

const toggle = document.querySelector(".temperature-toggle")

toggle.addEventListener("input", toggleTemperature)

function toggleTemperature() {
  console.log("toggle temperature")
}