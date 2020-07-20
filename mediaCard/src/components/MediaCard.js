import React from 'react';
import cat from '../img-cat.jpg';

function MediaCard() {
    const cardTitle = (
      <div className='card__title'>
        <img className='img' src={cat} alt='cat'></img>
        <div className='content__title'>
          <h2 className='name'>Crazy Cat</h2>
          <p className='date'>Domingo 19 de junio de 2020</p>
        </div>
      </div>
    );
    const cardText = (
      <div className='card__text'>
        <p>
          If it fits i sits purr. Cereal boxes make for five star accommodation
          mouse yet wake up wander around the house making large amounts of noise
          jump on top of your human's bed and fall asleep again purr while eating
          yet see brother cat receive pets, attack out of jealousy freak human out
          make funny noise mow mow mow mow mow mow success now attack human, and
          wack the mini furry mouse.Sit on the laptop cough yet sun bathe, so
          asdflkjaertvlkjasntvkjn (sits on keyboard).
        </p>
      </div>
    );
    const cardFooter = (
      <div className='card__footer'>
        <p className='moreText'>Leer más...</p>
        <div className='content__heart'>
          <p className='number'>37</p>
          <i class='fas fa-heart'></i>
        </div>
      </div>
    );
  
    const card = (
      <div className='card'>
        {cardTitle}
        {cardText}
        {cardFooter}
      </div>
    );
    return card;
}
  
export default MediaCard;