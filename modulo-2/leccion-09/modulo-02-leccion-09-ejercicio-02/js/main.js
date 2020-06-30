'use strict';

const numbers = [];

function get100Numbers() {
  for (let i = 1; i < 101; i++) {
    numbers.push(i);
  }
    for (const number of numbers) {
      console.log(number)
    } 
    return numbers;
}


function getReversed100Numbers() {

    get100Numbers().reverse()
    for (const number of numbers) {
        console.log(number)
    }
    return numbers
}

getReversed100Numbers();

