import React from 'react';

import CheckMarks from '../images/fi-rr-list-check.png'
import FollowIcon from '../images/fi-rr-following.png'

const services = () => {
  return <div className='other-background'><div className='services-container'>Our Services<div className='services-info-container'><div className='services-image-container'><img src={CheckMarks} className='check-marks-image'></img> </div><div className='services-image-container'><img src={FollowIcon} className='follow-image'></img></div></div></div></div>;
};

export default services;
