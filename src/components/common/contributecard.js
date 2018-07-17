import React from 'react';

const Contributecard = (props) => {
  return (
    <div className="contribute-card">
      <img src={props.image} alt={props.desc} width="60"/>
      <span>{props.desc}</span>
    </div>
  )
}

export default Contributecard;
