import React from 'react';

function MediaCard(props) {
  console.log(props);
  const cardTitle = (
    <div className='card__title'>
      <img className='img' src={props.img} alt='cat'></img>
      <div className='content__title'>
        <h2 className='name'>{props.name}</h2>
        <p className='date'>{props.date}</p>
      </div>
    </div>
  );
  const cardText = (
    <div className='card__text'>
      <p>{props.text}</p>
    </div>
  );
  const cardFooter = (
    <div className='card__footer'>
      <p className='moreText'>Leer más...</p>
      <div className='content__heart'>
        <p className='number'>{props.numberLikes}</p>
        <i className={props.heart}></i>
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
