import './temperature-toggle.css';
import { emit } from '../../services/pub-sub';

const toggle = document.querySelector('.temperature-toggle');

function toggleTemperature() {
  emit('switchTemperature', null);
}

toggle.addEventListener('input', toggleTemperature);
