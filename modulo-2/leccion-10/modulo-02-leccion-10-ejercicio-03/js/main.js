'use strict';

const button = document.querySelector('.js-button');
const name = document.querySelector('.js-name');
const number = document.querySelector('.js-number');
const img = document.querySelector('.js-image');
const error = document.querySelector('.js-userError');

function getUser(ev) {
  ev.preventDefault();
  const input = document.querySelector('.js-input');
  const user = input.value;
  fetch(`https://api.github.com/users/${user}`)
    .then((response) => response.json())
    .then((data) => {
      if (user === data.login) {
        console.log(data);
        error.classList.add('hidden');
        name.innerHTML = data.name;
        number.innerHTML = data.public_repos;
        img.src = data.avatar_url;
      } else {
        error.classList.remove('hidden');
      }
    });
}

button.addEventListener('click', getUser);
