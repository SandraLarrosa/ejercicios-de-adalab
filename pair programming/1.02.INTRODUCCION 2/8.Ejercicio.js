const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const element = document.querySelector('ul');

element.innerHTML = `<li class = "firstDog"><img src="${firstDogImage}" alt="${firstDogName}"><p>${firstDogName}</p></li><li class = "secondDog"><img src="${secondDogImage}" alt="${secondDogName}"><p>${secondDogName}</p></li><li class = "thirdDog"><img src="${thirdDogImage}" alt="${thirdDogImage}"><p>${thirdDogName}</p></li>`;
