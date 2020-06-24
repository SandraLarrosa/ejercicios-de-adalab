'use strict'

const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');

function changeColor(event) {
    
    const selectedButton = event.currentTarget;

    selectedButton.classList.toggle('color1')
}

button1.addEventListener('click', changeColor);
button2.addEventListener('click', changeColor);