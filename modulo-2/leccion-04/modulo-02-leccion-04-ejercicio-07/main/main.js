'use strict'

const avocadoPrice = 1.5;
const money = 33;

const avocados = money >= avocadoPrice ? money / avocadoPrice : '0';

console.log(avocados);