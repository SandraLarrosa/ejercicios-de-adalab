'use strict';

const users = [
  { name: 'María', isPremium: false, pin: 2389 },
  { name: 'Lucía', isPremium: true, pin: 2384 },
  { name: 'Susana', isPremium: true, pin: 2837 },
  { name: 'Rocío', isPremium: false, pin: 5232 },
  { name: 'Inmaculada', isPremium: false, pin: 8998 },
];

const userPin = users.find((user) => user.pin === 5232);

console.log(userPin);

const indexUser = users.splice(users.findIndex((user) => user.pin === 5232), 1);

console.log(indexUser);

/* OTRA FORMA DE HACERLO
const indexUser = users.findIndex((user) => user.pin === 5232);
users.splice(indexUser, 1); */ 

console.log(users);
