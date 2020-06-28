'use strict'

const numbers = [2, 6, 8, 4, 3];

let accum = 0;
function average(a) {

    numbers.push(a)
    console.log(numbers);

    for (let i = 0; i < numbers.length; i++) {
        accum += numbers[i];
    }

    let result = accum / numbers.length
    return console.log(result)

}

average(23);
average(45);
average(52);