import React, { useState } from 'react';
import '../stylesheets/App.scss';
import OlderYear from './OlderYear';

function App() {
  const initialState = 32
  const [year, setYear] = useState(initialState);

  const sumNewYear = (year) => year + 1;

  const handleNewYear = () => {
    setYear(sumNewYear(year))
  }

  const handleResetState = () => {
    setYear(initialState)
  }

  return (
    <div className='App'>
      <OlderYear getYear={handleNewYear} yearNumber={year} resetYear={handleResetState}/>
    </div>
  );
}

export default App;
