'use strict';

const times = [56, 9, 45, 28, 35];

const average = times.reduce((sum, time) => sum + time) / times.length;

console.log(average);
