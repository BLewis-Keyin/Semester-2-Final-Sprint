import React from 'react';

import Brookelynn from '../images/Brookelynn.png'
import Evan from '../images/Evan.png'
import Brandon from '../images/Brandon.png'
  

const about = () => {
  return (
    <div className='other-background'>
      <div className='about-container'>
        <div className='about-content'>
          <div className='about-text'>Welcome to EB Manager, your all-in-one solution for efficient task management and productivity enhancement. Whether you're an individual looking to stay organized or a team aiming to streamline workflows, EB Manager is here to empower you with cutting-edge features and a user-friendly interface. <br />-<br />
            Our Mission...
            <br />-<br />

            At EB Manager, our mission is to revolutionize the way you approach tasks and projects. We understand that the modern world is fast-paced and dynamic, which is why we've created a task manager that adapts to your needs. Our goal is to help you achieve your goals with ease, ensuring that you stay on top of your tasks while maintaining a healthy work-life balance.
          </div>
        
        <div className='personal-container-brookelyn'>Hey! I’m Brookelynn I’m a mom of one and I love doing stuff outside along with going on the quads and everything and in this project I came up with the idea to do the to-do list where u can keep track of everyday activities! And then mark it off when it’s one!<div className='about-image'>
          <img src={Brookelynn} alt='Brookelynn' className='brookelynn-image' />
          </div>
          </div>
        
          <div className='personal-container-evan'><img src={Evan} alt='Evan' className='evan-image'/>Hello im Evan im the youngest person here. i am a tech geek and a video game nerd, i designed this page and the logo as well</div><div className='about-image'>

          </div>
          <div className='personal-container-brandon'>Hello, I'm Brandon. I have previous experience with database management and cybersecurity. I did the engineering of the react components for this project and helped make it all work ."<div className='about-image'>
            <img src={Brandon} alt='Brandon' className='brandon-image' />
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default about;
