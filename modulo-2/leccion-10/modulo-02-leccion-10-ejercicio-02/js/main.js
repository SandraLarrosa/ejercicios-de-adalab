'use strict';


const button2 = document.querySelector('.js-dog');

function getDogImage() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

button2.addEventListener('click', getDogImage);
