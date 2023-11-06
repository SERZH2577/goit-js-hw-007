const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', addsNameTtoOutput);

function addsNameTtoOutput(evt) {
  if (evt.currentTarget.value.trim()) {
    nameEl.textContent = evt.currentTarget.value.trim();
    return;
  }

  nameEl.textContent = 'Anonymous';
}
