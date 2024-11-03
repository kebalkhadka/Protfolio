import React from 'react'
import'./Skills.css';
import { skills } from '../../data/constants';
const About = () => {
  return (
    <div id='skills' className='skills'>
     <div className="headings">
      <h1 className='skills'>Skills</h1>
      <p className='description'>Here are some of my skills on which I have been working on for the past years.</p>

    </div>
    <div className="about_skill_container">
    {
      skills[0].skills.map((skill,index)=>{
        return(
          <div key={index}>
          <img src={skill.image} alt={skill.name} />
          </div>
        )

      })
    }
    </div>
    </div>
  )
}

export default About