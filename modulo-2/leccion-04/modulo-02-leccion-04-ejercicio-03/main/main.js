'use strict'

function ticket(a) {
    const iva = a * 21 / 100;
    const total = a + iva;
    const text = `Precio sin IVA: ${a}, IVA: ${iva}, Total: ${total}`
    return text
}

console.log(ticket(20));
console.log(ticket(5));
console.log(ticket(12));