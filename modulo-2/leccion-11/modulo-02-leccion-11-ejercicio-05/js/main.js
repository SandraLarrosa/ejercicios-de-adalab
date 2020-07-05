'use strict';

const radioCheck = document.querySelectorAll('.js-color');
const text = document.querySelector('.js-text');

function changeColor(ev) {
  const color = ev.currentTarget.value;
  if (color === 'colorDark') {
    text.classList.remove('colorLight');
    text.classList.add('colorDark');
    localStorage.setItem('color', JSON.stringify(color));
  } else {
    text.classList.remove('colorDark');
    text.classList.add('colorLight');
    localStorage.setItem('color', JSON.stringify(color));
  }
}

function listener() {
  for (const radio of radioCheck) {
    radio.addEventListener('click', changeColor);
  }
}

listener();
