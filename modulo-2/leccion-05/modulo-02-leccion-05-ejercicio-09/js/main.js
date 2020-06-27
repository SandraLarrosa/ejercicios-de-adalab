'use strict'

const isra = document.querySelector('.teacher--isra');
const barlos = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');
const teacher = document.querySelectorAll('.teacher');

function selected(e){
  const sectionElement = e.currentTarget;
    sectionElement.classList.toggle('teacher--selected');
  
  if(sectionElement.classList.contains('teacher--selected')) {
        sectionElement.querySelector('.favorite').innerHTML = 'Quitar'
    } else {
        sectionElement.querySelector('.favorite').innerHTML = 'Añadir'
    }
}
 
/* function getElementTarget() {
  for(let i = 0; i < teacher.length; i++) { 
    teacher[i].addEventListener('click', selected);
  }
} 
 */

function getElementTarget() {
  for (const teach of teacher) {
    teach.addEventListener('click', selected);
  }
}

getElementTarget();

/*
isra.addEventListener('click', selected);
barlos.addEventListener('click', selected);
nasi.addEventListener('click', selected);*/
