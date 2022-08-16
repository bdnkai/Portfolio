import React from 'react'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'
import resumeDoc from '../assets/bdn_resume.pdf'

function Resume() {
  return (
    <div> 
      <div className="resume">
      <iframe
        className="resume"
        src={resumeDoc}
        type="application/pdf"
        frameBorder="0"
        scrolling="auto"
        height={'100%'}
        width={'100%'}
        ></iframe>
      </div>
      <div className="icons">
      <a href="https://www.linkedin.com/in/bdnii/"><img src={linkedIn} alt="" /></a>
      <a href="https://github.com/bdnkai"><img src={gitHub} alt="" /></a> 
    </div>
    </div>
  )
}

export default Resume