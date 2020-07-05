'use strict';

const inputName = document.querySelector('.js-inputName');
const inputLastName = document.querySelector('.js-inputLastName')
const textName = document.querySelector('.js-textName');
const textLastName = document.querySelector('.js-textLastName');


function saveLS(ev) {
  const nameValue = input.Name;
  console.log(nameValue);
  textName.innerHTML = nameValue;
  localStorage.setItem('name', nameValue);
}

function saveLastLS(ev) {
  const lastValue = input.lastName.value;
  console.log(lastValue);
  textLastName.innerHTML = lastValue;
  localStorage.setItem('lastName', nameValue);
}

inputName.addEventListener('keyup', saveLS);
inputLastName.addEventListener('keyup', saveLastLS);


function printLS() {
  let nameUser = localStorage.getItem('name');
  let lastName = localStorage.getItem('lastName')
  if (!nameUser && !lastName) {
    alert('No hay nada guardado');
  } else {
    inputName.value = nameUser;
    inputLastName.value = lastName;
    textName.innerHTML = nameUser;
    textLastName.innerHTML = lastName;
  }
}

printLS();
