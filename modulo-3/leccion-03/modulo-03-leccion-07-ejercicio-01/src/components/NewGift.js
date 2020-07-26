import React from 'react';

const NewGift = (props) => {
  const getNewGift = () => {
    props.getGift();
  };

  const resetGift = () => {
    props.resetGift();
  };

  return (
    <div className = 'section'>
      <button type='button' onClick={getNewGift}>
        Dame regalos
      </button>
      <p>{`Tengo ${props.giftNumber} regalo`}</p>
      <button type='button' onClick={resetGift}>
        Quitarme todos los regalos
      </button>
    </div>
  );
};

export default NewGift;
