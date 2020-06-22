'use strict'

const h2 = document.querySelector('h2');
const name = 'Alexandra';


if (name.toLowerCase() === 'alexandra') {
    h2.innerHTML = `Bienvenida, ${name}`;
} else {
    h2.innerHTML = `Lo siento, pero el usuario ${name} que has introducido no está registrado`;
};