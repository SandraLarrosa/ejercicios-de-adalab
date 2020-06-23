'use strict'

function ticket(a) {
    const iva = a * 21 / 100;
    const total = a + iva;
    return `Precio sin IVA: ${a}, IVA: ${iva}, Total: ${total}`;
}

const text = ticket(20);
const text1 = ticket(5);
const text2 = ticket(12);


console.log(text);
console.log(text1);
console.log(text2);