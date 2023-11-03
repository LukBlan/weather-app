import "./temperature-toggle.css"
import {emit} from "../../services/pub-sub";

const toggle = document.querySelector(".temperature-toggle");

toggle.addEventListener("input", toggleTemperature);

function toggleTemperature() {
  emit("switchTemperature", null)
}