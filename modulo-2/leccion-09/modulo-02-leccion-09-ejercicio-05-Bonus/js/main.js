'use strict';

function tree(number) {
  let triangle = '▲';
  for (let i = 0; i < number; i++) {
    console.log(triangle);
    triangle += '▲';
  }
}

tree(5);
