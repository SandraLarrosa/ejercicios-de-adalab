'use strict'

const button = document.querySelector('.button');
const title = document.querySelector('.title');
const text = document.querySelector('.text');

if (button.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  text.innerHTML = 'Tenga cuidado'
} else if (button.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  text.innerHTML = 'Ha surgido un error'
} else if (button.classList.contains('success')){
  title.innerHTML = 'CORRECTO';
  text.innerHTML = "Los datos son correctos"
};
 