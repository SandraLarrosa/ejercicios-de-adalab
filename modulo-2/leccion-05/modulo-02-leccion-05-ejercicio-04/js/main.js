'use strict'

const background = document.querySelector('.background');


function changeColor() {

    if (scrollY === 0) {
        background.classList.remove('color2')
        background.classList.add('color1')
    } else if (scrollY > 250) {
        background.classList.remove('color1')
        background.classList.add('color2')
    }
}

addEventListener('scroll', changeColor);
