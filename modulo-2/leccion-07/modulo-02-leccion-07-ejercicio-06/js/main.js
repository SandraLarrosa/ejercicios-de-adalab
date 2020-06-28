'use strict'

const serie1 = document.querySelector('.serie1');
const serie2 = document.querySelector('.serie2');
const button = document.querySelector('.button');
const text = document.querySelector('.text');

const info = []; 


function saveData() {
    info.push(serie1.value);
    info.push(serie2.value);
}

function writeHtml() {
    for (const print of info) {
        text.innerHTML = `${text.innerHTML}¡A mí también me encantó ${print}! Tenemos mucho en común, humana. <br>`;
    }
}

function showInfo(ev) {
    ev.preventDefault();

    saveData()
    writeHtml()
    console.log(info);
}


button.addEventListener('click', showInfo);

