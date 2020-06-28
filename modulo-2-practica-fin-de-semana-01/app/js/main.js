'use strict';

//SELECTORS...
const userName = document.querySelector('.js-user-name');
const userPassword = document.querySelector('.js-user-password');
const loginButton = document.querySelector('.js-login-button')
const textError = document.querySelector('.error-wrapper');


//Number of user attemps
let attemps = 0;

//Object saved in BBDD with user information to compare with my form
const userInfo = {
	name: 'front23',
	password: 'bicicleta'
};

//FUNCTIONS

function login(ev) {
	if (userName.value === userInfo.name && attemps < 3) {
		textError.classList.add('hidden');
		alert('Estás dentro');
		attemps = 0;
	} else if (attemps >= 3) {
		alert('Estás bloqueado')
	} else {
		attemps++;
		textError.classList.remove('hidden');
		console.log(`Te quedan ${3 - attemps} intentos`);
	}
}

//LISTENERS

loginButton.addEventListener('click', login);