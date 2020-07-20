import React from 'react';
import MediaCard from './MediaCard';
import cat from '../img-cat.jpg';
import '../App.scss';

function App() {
  return (
    <div>
      <MediaCard
        name='Crazy Cat'
        date={`${new Date()}`}
        img={cat}
        text="If it fits i sits purr. Cereal boxes make for five star accommodation mouse yet wake up wander around the house making large amounts of noise
        jump on top of your human's bed and fall asleep again purr while eating
        yet see brother cat receive pets, attack out of jealousy freak human out
        make funny noise mow mow mow mow mow mow success now attack human, and
        wack the mini furry mouse.Sit on the laptop cough yet sun bathe, so
        asdflkjaertvlkjasntvkjn (sits on keyboard)."
        numberLikes='37'
        heart='fas fa-heart'
      />
    </div>
  );
}

export default App;
