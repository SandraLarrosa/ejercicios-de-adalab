import React, { useState } from 'react';
import '../stylesheets/App.scss';
import OlderYear from './OlderYear';
import NewGift from './NewGift';

function App() {
  const initialYears = 32;
  const initialGifts = 1;

  const [year, setYear] = useState(initialYears);
  const [gift, setGift] = useState(initialGifts)

  const sum = (number) => number + 1;

  const handleNewYear = () => {
    setYear(sum(year))
  }

  const handleNewGift = () => {
    setGift(sum(gift))
  }

  const handleResetState = () => {
    setYear(initialYears)
  }

  const handleResetGifts = () => {
    setGift(initialGifts)
  }

  return (
    <div className='App'>
      <OlderYear getYear={handleNewYear} yearNumber={year} resetYear={handleResetState} />
      <NewGift getGift={handleNewGift} giftNumber={gift} resetGift={handleResetGifts}/>
    </div>
  );
}

export default App;
