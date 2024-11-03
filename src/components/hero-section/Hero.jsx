import React from 'react';
import { Bio } from '../../data/constants';
import './Hero.css'; // Ensure this is correctly imported
import profile from '../../assets/images/profile.png';


const Hero = () => {
  return (
    <div className='hero' id='about'>
      <div className="aboutMe">
        <h1 className='heroGreeting'>Hi, I am</h1>
        <h2 className='heroName'>{Bio.name}</h2>
        <h3 className='heroRole'>I am a <span>
          { Bio.roles}
          </span>
         </h3>
        <p className='heroDescription'>{Bio.description}</p>
        <a 
          href={Bio.resume} 
          className="resumeButton" 
          download target='blank'>
          Check Resume
        </a>
      </div>
      <div className="images">
      <img src={profile}alt="myimage"/>
      </div>
      
    </div>
  );
}

export default Hero;
