import React from 'react';


function Destiny() {
    const selectDestiny = (ev) => {
        const selectValue = ev.currentTarget.value;
        alert(`Tu destino es viajar a ${selectValue}`)
    }
    return (
        <div className="container">
            <label htmlFor="select">
                <select onChange={selectDestiny} name="selectDestiny" id="select">
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Praga">Praga</option>
                    <option value="Boston">Boston</option>
                    <option value="Tokio">Tokio</option>
                </select>
            </label>
      </div>
    );
  }


export default Destiny;