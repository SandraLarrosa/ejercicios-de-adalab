import React from 'react';
import '../stylesheets/Club.scss';

const Club = (props) => {
  const nameMembers = props.members.map((member) => {
    return <li>{member}</li>;
  });

  return (
    <>
      <article className='cardClub'>
        <i className={`${props.icon} icon`}></i>
        <div className='cardText'>
          <h2 className='cardTitle'>{props.name}</h2>
          <div className='cardMembers'>
            <h4 className='cardMembers__title'>Members:</h4>
            <ul className='cardMembers__list'>{nameMembers}</ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default Club;
