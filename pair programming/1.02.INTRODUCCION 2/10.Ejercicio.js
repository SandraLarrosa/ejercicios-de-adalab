const edad = document.querySelector('.edad');
const horas = document.querySelector('.horas');
const converEdad = parseInt(edad.innerHTML);

const horasAno = 24 * 365;

const misHoras = horasAno * converEdad;

horas.innerHTML = (`He vivido ${misHoras} horas`);