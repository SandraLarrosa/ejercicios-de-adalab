'use strict';

class square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    return this.side * 4;
  }

  area() {
    return this.side * this.side;
  }
}

const square1 = new square(1);
const square2 = new square(3);
const square3 = new square(7);

console.log(
  `El perímetro es de ${square1.perimeter()} y su area es ${square1.area()}`
);
console.log(
  `El perímetro es de ${square2.perimeter()} y su area es ${square2.area()}`
);
console.log(
  `El perímetro es de ${square3.perimeter()} y su area es ${square3.area()}`
);
