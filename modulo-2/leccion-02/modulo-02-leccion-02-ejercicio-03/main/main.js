'use strict'

const priceKiwi = 5;
const pricePera = 2;
const priceUva = 4;

const shopKiwi = priceKiwi * 2;
const shopPera = pricePera * 3;
const shopUva = priceUva * 0.500;


const totalShop = shopKiwi + shopPera + shopUva;

const kiwi = document.querySelector('.kiwi');
const pera = document.querySelector('.pera');
const uva = document.querySelector('.uva');
const total = document.querySelector('.total__price');

kiwi.innerHTML = `Total Precio Kiwi: ${shopKiwi} €`;
pera.innerHTML = `Total Precio Pera: ${shopPera} €`;
uva.innerHTML = `Total Precio Uva: ${shopUva} €`;

total.innerHTML = `A pagar: ${totalShop} €`;

console.log(totalShop);
