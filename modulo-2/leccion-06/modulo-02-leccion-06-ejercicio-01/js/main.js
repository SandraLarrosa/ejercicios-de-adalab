'use strict'

const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const button = document.querySelector('.button');


const adalaber1 = {
    name: 'Susana', 
    age: 34,
    career: 'Periodista',
}

const adalaber2 = {
    name: 'Rocío', 
    age: 25,
    career: 'Actriz',
}

function addHtml(ev) {
    text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.career}.`;
    text2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.career}.`;
}

button.addEventListener('click', addHtml);