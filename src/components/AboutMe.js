import React from 'react'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'

function AboutMe() {
  return (
    <div>

    <div className='AboutMe'>
      Previously a realtor in San Diego that switched careers to become a Software-Engineer. I enjoy being absorbed into my work and being able to see my work fruition into reality. In real-estate I took pride in being accurate in my analysis and finding success for the investors that worked with me. My analysis is the reason I eventually found inspiration to become an upcoming software-engineer. <span class="bonus">(Ask me about that time I was being innovative by working smarter, not harder)</span>
    </div>
    <div className="icons">
      <a href="https://www.linkedin.com/in/bdnii/"><img src={linkedIn} alt="" /></a>
      <a href="https://github.com/bdnkai"><img src={gitHub} alt="" /></a> 
    </div>
    </div>
  )
}

export default AboutMe