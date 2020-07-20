import React from 'react';

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    const width = this.props.width;
    const height = this.props.height;
    return (
   <a href='http://lorempixel.com'>
        <img
          src={`http://lorempixel.com/400/200/cats/${randomCat}`}
          alt='Random cat'
          width={width}
          height={height}
        />   
      </a>
    );
  }
}

export default RandomCat;
