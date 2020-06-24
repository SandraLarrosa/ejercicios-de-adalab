"use strict";

/* let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
} */

/* const avocadoPrice = 1.5;
const money = 33;

const avocados = money >= avocadoPrice ? money / avocadoPrice : 0;
console.log(avocados);
 */

const year = 1970;

const leapYear = year % 4;

if (leapYear === 0) {
  console.log(`El ${year} es bisiesto`);
} else if (leapYear === 1) {
  console.log(`El próximo año bisiesto será ${year + 3}`);
} else if (leapYear === 2) {
  console.log(`El próximo año bisiesto será ${year + 2}`);
} else {
  console.log(`El próximo año bisiesto será ${year + 1}`);
}
