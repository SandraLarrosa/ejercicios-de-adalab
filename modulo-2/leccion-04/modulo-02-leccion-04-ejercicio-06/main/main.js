'use strict'


function getEl(a) {
    const element = document.querySelector(a);

    if (!element) {
        console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`)
    } else {
        console.log('Es correcto')
    }
    return element;
} 

getEl('.div1');
getEl('.ke');


