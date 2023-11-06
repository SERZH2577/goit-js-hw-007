const formEl = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('.login-form input');

formEl.addEventListener('submit', getsUserLoginDetails);

function getsUserLoginDetails(evt) {
  evt.preventDefault();

  const emailValue = evt.target.elements.email.value;
  const passwordValue = evt.target.elements.password.value;

  if (emailValue.trim() && passwordValue.trim()) {
    const obj = {};

    inputEl.forEach(el => {
      obj[el.getAttribute('name')] = el.value.trim();
    });

    formEl.reset();

    return console.log(obj);
  }

  alert('All form fields must be filled in');
}
