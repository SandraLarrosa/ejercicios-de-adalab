'use strict'

const background = document.querySelector('.background');


function changeColor(event) {

    if (event.key === 'r') {
        background.classList.toggle('color1')
    } else if (event.key === 'm') {
        background.classList.toggle('color2')
    }
}

addEventListener('keydown', changeColor);
