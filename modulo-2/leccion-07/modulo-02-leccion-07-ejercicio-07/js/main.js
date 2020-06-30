'use strict'

const infoAdalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingenieria química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocio',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    }
];


function countAdalabers(adalaber) {
    console.log(adalaber.length)
}

countAdalabers(infoAdalabers);

function averageAge() {
    for (const adalaber of infoAdalabers) {
        console.log(adalaber.length)
        /* infoAdalabers[adalaber].age / adalaber.length */
    }
}

averageAge();


