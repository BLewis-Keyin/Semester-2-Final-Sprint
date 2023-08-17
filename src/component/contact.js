import React from 'react';

import PhoneIcon from '../images/fi-rr-phone-call.png'
import EmailIcon from '../images/fi-rr-envelope.png'

const Contact = () => {
  return (
    
    <div className='other-background'>
      <img src={PhoneIcon} className='phone-icon'></img>
      <img src={EmailIcon} className='email-icon'></img>
    <div className='contact-container'>
      <div className='contact-boxes'>
        <div className='contact-box'>555-867-5309</div>
        <div className='contact-box'>ebmanager1234@example.com</div>
      </div>
      <div className='contact-message-box'>
        Feel free to notify us about any problems or concerns you have at our designated number or email.
        If you are having trouble finding a service you require, please visit our services page.
      </div>
      </div>
    </div>
  );
};

export default Contact;