const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', onAddsElements);
btnDestroyEl.addEventListener('click', onClearsElements);

function onAddsElements() {
  if (inputEl.value === '' || inputEl.value < 1 || inputEl.value > 100) {
    return;
  }

  let size = 20;
  const arrElements = [];

  for (let i = 0; i < inputEl.value; i++) {
    size += 10;

    arrElements.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`,
    );
  }

  boxesEl.innerHTML = arrElements.join('');
  inputEl.value = '';
}

function onClearsElements() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
