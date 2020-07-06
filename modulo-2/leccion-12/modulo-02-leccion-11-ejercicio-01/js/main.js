'use strict';

const numbers = [1, 2, 3];

function printNumbers() {
  const listHtml = document.querySelector('.list');
  
  for (const number of numbers) {
    const newLi = document.createElement('li');
    const newNumber = document.createTextNode(number);
    newLi.appendChild(newNumber);

    listHtml.appendChild(newLi);
  }
}

printNumbers();
