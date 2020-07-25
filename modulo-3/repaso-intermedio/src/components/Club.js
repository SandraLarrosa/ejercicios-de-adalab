import React from 'react';
import ClubList from './ClubList';
import '../stylesheets/Club.scss';

const Club = (props) => {
  const nameMembers = props.members.map((member) => {
      return <p>{member}</p>;
  });
  return (
    <div className='club'>
      <h1>{props.name}</h1>
      <i className={props.icon}></i>
      {nameMembers}
    </div>
  );
};

export default Club;
