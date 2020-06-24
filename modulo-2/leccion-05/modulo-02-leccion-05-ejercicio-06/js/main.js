'use strict'

const input = document.querySelector('.input');
const text = document.querySelector('.text');


input.addEventListener('keydown', (event) => text.innerHTML = event.currentTarget.value);
