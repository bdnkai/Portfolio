import React from 'react'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'

function Portfolio() {
  return (			
    <div>
      <h1>hello from portfolio</h1>
      <div className="icons">
      <a href="https://www.linkedin.com/in/bdnii/"><img src={linkedIn} alt="" /></a>
      <a href="https://github.com/bdnkai"><img src={gitHub} alt="" /></a> 
    </div>
    </div>
  )
}

export default Portfolio