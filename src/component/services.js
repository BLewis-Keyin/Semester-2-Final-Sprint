import React from 'react';

import CheckMarks from '../images/fi-rr-list-check.png'
import FollowIcon from '../images/fi-rr-following.png'

const services = () => {
  return (
    <div className='other-background'>
      <div className='services-container'>
        <h2>Our Services</h2>
        <div className='services-content'>
          <div className='services-image-container'>
            <img src={CheckMarks} className='check-marks-image' alt='Check Marks' />
          </div>
          <div className='services-image-container'>
            <img src={FollowIcon} className='follow-image' alt='Follow Icon' />
          </div>
        </div>
        <div className='services-text-box'>
          <div className='services-text'>Personal Task<br /> Management</div>
          <div className='services-text'>Team<br /> Collaboration</div>
        </div>
      </div>
    </div>
  );

};

export default services;
