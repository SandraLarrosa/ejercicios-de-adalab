'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumbers() {
  const pairLostNumbers = [];
  for (const number of lostNumbers) {
    if (number % 2 === 0) {
      pairLostNumbers.push(number);
    }
  }
  const multipleNumbers = [];
  for (const number of lostNumbers) {
    if (number % 3 == 0) {
      multipleNumbers.push(number);
    }
  }
  const bestNumber = pairLostNumbers.concat(multipleNumbers);

  for (const printNumber of bestNumber) {
    console.log(printNumber);
  }
  return;
}

bestLostNumbers();
