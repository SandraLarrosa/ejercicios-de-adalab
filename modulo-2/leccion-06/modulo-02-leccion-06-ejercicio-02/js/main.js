'use strict'

const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const button = document.querySelector('.button');

const adalaber1 = {
    name: 'Susana', 
    age: 34,
    career: 'Periodista'
}

adalaber1.textRun = 'Estoy corriendo';
adalaber1.run = () => console.log(adalaber1.textRun);

console.log(adalaber1.run());

adalaber1.runAMaratthon = distance => console.log(`${adalaber1.textRun} un maratón de ${distance} kilómetros`);

console.log(adalaber1.runAMaratthon(50));

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