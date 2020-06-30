'use strict'

const numbers = []

function get100Numbers() {
    for (let i = 1; i < 101; i++) {
        numbers.push(i);
    }
    for (const number of numbers) {
        console.log(number)
    }
    
}

get100Numbers();

