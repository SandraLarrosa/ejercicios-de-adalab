'use strict';

const inputName = document.querySelector('.js-input');
const text = document.querySelector('.js-text');

function saveLS(ev) {
  const nameValue = inputName.value;
  console.log(nameValue);
  text.innerHTML = nameValue;
  localStorage.setItem('name', nameValue);
}

inputName.addEventListener('keyup', saveLS);

function printLS() {
  let nameUser = localStorage.getItem('name');
  if (!nameUser) {
    alert('No hay nada guardado');
  } else {
    inputName.value = nameUser;
    text.innerHTML = nameUser;
  }
}

printLS();
