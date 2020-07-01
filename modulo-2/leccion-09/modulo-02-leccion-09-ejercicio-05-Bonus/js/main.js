'use strict';

/* function tree(number) {
  let triangle = '▲';
  for (let i = 0; i < number; i++) {
    console.log(triangle);
    triangle += '▲';
  }
}

tree(5); 

/* ---------Ejercicio 6--------- */

function tree(number) {
  const star = '★';
  const stem = '|';
  let triangle = '▲';
  console.log(star);
  for (let i = 0; i < number; i++) {
    console.log(triangle);
    triangle += '▲';
  }
  console.log(stem);
}

tree(5);
