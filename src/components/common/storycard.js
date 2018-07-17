import React from 'react';
const Storycard = (props) => {
  return (
    <span className="story-card">
      <p className="count">{props.count}+</p>
      <p className="description">{props.desc}</p>
    </span>
  )
}

export default Storycard;
