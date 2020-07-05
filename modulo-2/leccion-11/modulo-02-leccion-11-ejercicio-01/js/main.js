'use strict';

const button = document.querySelector('.js-button');
const listPeople = document.querySelector('.js-list');

let arrPeople = [];

function getUser(ev) {
  ev.preventDefault();
  const input = document.querySelector('.js-input');
  const user = input.value;
  fetch(`https://swapi.dev/api/people/?search=${user}`)
    .then((response) => response.json())
    .then((data) => {
      arrPeople = data.results;
      printData();
    });
}

button.addEventListener('click', getUser);

function printData() {
  for (const people of arrPeople) {
    listPeople.innerHTML += 
    `<li>
    <h4 class="name">Nombre: <span class="userName">${people.name}</span>
    </h4>
    <p>Género: <span class="userGender"> ${people.gender}</span>
    </p>
    </li>`;
  }
}
