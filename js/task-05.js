const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const buttonEl = document.querySelector('.change-color');

buttonEl.addEventListener('click', onChangesBackgroundColor);

function onChangesBackgroundColor() {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
