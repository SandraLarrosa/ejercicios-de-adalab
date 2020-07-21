import React from 'react';
import MediaCard from './MediaCard';
import cat from '../images/img-cat.jpg';
import cat2 from '../images/img-cat2.jpg';
import cat3 from '../images/img-cat3.jpg';

function MediaList() {
  return (
    <div>
          <h1 className="title">The Cats</h1>
          <section class="section__cards">
            <MediaCard
                name='Omg Cat'
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
                <MediaCard
                name='Crazy Cat'
                date={`${new Date()}`}
                img={cat2}
                text="Pushes butt to face bite the neighbor's bratty kid i cry and cry and cry unless you pet me, and then maybe i cry just for fun and chase dog then run away. Mew stand in front of the computer screen. Meow in empty rooms. Murder hooman toes bury the poop bury it deep. Trip on catnip annoy owner until he gives you food say meow repeatedly until belly rubs, feels good crash against wall but walk away like nothing happened purrr purr littel cat, little cat purr purr."
                numberLikes='8'
                heart='fas fa-heart'
                />
                <MediaCard
                name='Angry Cat'
                date={`${new Date()}`}
                img={cat3}
                text="Spend all night ensuring people don't sleep sleep all day walk on keyboard . Hunt anything that moves 𝕄𝔼𝕆𝕎, yet meowzer. Pelt around the house and up and down stairs chasing phantoms. Stare at ceiling climb a tree, wait for a fireman jump to fireman then scratch his face human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!Murder hooman toes bury the poop bury it deep."
                numberLikes='99'
                heart='fas fa-heart'
                />
            </section>
    </div>
  );
}

export default MediaList;
