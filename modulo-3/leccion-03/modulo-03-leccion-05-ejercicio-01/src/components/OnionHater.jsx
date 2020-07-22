import React from 'react';


function OnionHater() {
    const alertHateOnion = (ev) => {
        const textValue = ev.currentTarget.value.toLowerCase();
        const textInclude = textValue.includes('cebolla')
        if (textInclude) {
            alert('ODIO LA CEBOLLA')
        }
    }
    return (
        <div className="container">
            <label htmlFor="Text">
                <textarea onKeyUp={alertHateOnion} type="text" id="Text"/>
            </label>
      </div>
    );
  }


export default OnionHater;