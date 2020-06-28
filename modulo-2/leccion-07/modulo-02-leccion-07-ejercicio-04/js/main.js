'use strict'

const text = document.querySelector('.moon');

let moon = 2017;

for (let i = 0; i < 16; i++) {
    moon += 3
    text.innerHTML = `${text.innerHTML} La próxima luna del cazador será en el año ${moon} <br>`;
} 