const inputEl = document.querySelector('#controls input');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', onOoo);
btnDestroyEl.addEventListener('click', onXxx);

function onOoo() {
  if (inputEl.value === '' || inputEl.value < 1 || inputEl.value > 100) {
    return;
  }

  boxesEl.innerHTML = '';
  let size = 20;

  for (let i = 0; i < inputEl.value; i++) {
    size += 10;
    const tagDiv = document.createElement('div');
    tagDiv.style.marginBottom = '5px';
    tagDiv.style.width = size + 'px';
    tagDiv.style.height = size + 'px';
    tagDiv.style.backgroundColor = getRandomHexColor();
    boxesEl.appendChild(tagDiv);
  }

  inputEl.value = '';
}

function onXxx() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
