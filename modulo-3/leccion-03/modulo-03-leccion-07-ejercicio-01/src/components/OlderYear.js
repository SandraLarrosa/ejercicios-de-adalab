import React from 'react';

const OlderYear = props => {

   const getNewYear = () => {
        props.getYear()
    } 

    const resetYear = () => {
        props.resetYear()
    }

    return (
        <div>
            <button type="button" onClick={getNewYear}>Hazme más viejo</button>
            <p>{`Hoy tengo ${props.yearNumber} años de edad`}</p>
            <button type="button" onClick={resetYear}>Reset</button>
        </div>
    );
};



export default OlderYear;