'use strict';

const select = document.querySelector('.js-select');

function changePhoto(ev) {
  const valueSelect = select.value;
  const listPhotos = document.querySelectorAll('.img')
  for (const photo of listPhotos) {
    console.log(photo)
    if (valueSelect === 'madrid') {
      const newItem
    }

  }
}



select.addEventListener('change', changePhoto)