import React from 'react';
import './foodcard.css';


const foodcard = ({CardPhoto,Name}) => {
  return (
    <div className='food-card'>
      <img src={CardPhoto} alt="veg" />
      <h3> {Name} </h3>
    </div>
  )
}

export default foodcard
