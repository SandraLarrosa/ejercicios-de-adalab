import React from 'react';

const OlderYear = (props) => {
  const getNewYear = () => {
    props.getYear();
  };

  const resetYear = () => {
    props.resetYear();
  };

  return (
    <div className='section'>
      <button type='button' onClick={getNewYear}>
        Hazme más viejo
      </button>
      <p>{`Hoy tengo ${props.yearNumber} años de edad`}</p>
      <button type='button' onClick={resetYear}>
        Volver a mi edad
      </button>
    </div>
  );
};

export default OlderYear;
