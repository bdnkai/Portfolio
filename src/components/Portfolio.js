import React from 'react'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'
import Gitz from '../assets/Gitz.png'
import BlackJack from '../assets/BlackJack.png'
import MyHolo from '../assets/MyHolo.png'
import '../css/portfolio.css'

function Portfolio() {
  return (			
    <div className="portfolio-container">
      <div className="box-container">
 			  <div className="box-item">
 			    <div className="flip-box">
 			      <div className="flip-box-front text-center" style={{backgroundImage: `url(${Gitz})`}}>
 			        <div className="inner color-white">
 			          <h3 className="flip-box-header">Gitz Carlton</h3>
 			          <p>Employees Portal</p>
                 <button className="flip-box-button"> <a href="https://github.com/CPlusPLusPlusPluss/Front-End-Project-3">GitHub</a></button>
 			        </div>
 			      </div>
 			      <div className="flip-box-back text-center" style={{backgroundImage: `url(${Gitz})`}}>
 			        <div className="inner color-white">
 			          <h3 className="flip-box-header">Gitz Carlton</h3>
 			          <p> Check It Out Below</p>
 			          <button className="flip-box-button">GitHub</button>
 			        </div>
 			      </div>
 			    </div>
 			  </div>
			   <div className="box-item">
 			    <div className="flip-box">
 			      <div className="flip-box-front text-center" style={{backgroundImage: `url(${BlackJack})`}}>
 			        <div className="inner color-white">
 			          <h3 className="flip-box-header">Hi-Lo</h3>
 			          <p>BJ Card Counting</p>
                 <button className="flip-box-button"> <a href="https://github.com/bdnkai/HiLoVisualizer">GitHub</a></button>
 			        </div>
 			      </div>
 			      <div className="flip-box-back text-center" style={{backgroundImage: `url(${BlackJack})`}}>
 			        <div className="inner color-white">
 			          <h3 className="flip-box-header">Space Battle</h3>
 			          <p> Check It Out Below</p>
 			          <button className="flip-box-button">src GitHub</button>
 			        </div>
 			      </div>
 			    </div>
 			  </div>
			   <div className="box-item">
 			    <div className="flip-box" >
 			      <div className="flip-box-front text-center" style={{backgroundImage: `url(${MyHolo})`}}>
 			        <div className="inner color-white" id="black">
 			          <h3 className="flip-box-header">MyHolo</h3>
 			          <p>Raise Your Own Holo</p>
                 <button className="flip-box-button" id='black'> <a id='black' href="https://github.com/bdnkai/MyHOLO">GitHub</a></button>
 			        </div>
 			      </div>
 			      <div className="flip-box-back text-center" style={{backgroundImage: `url(${MyHolo})`}}>
 			        <div className="inner color-white" id="black">
 			          <h3 className="flip-box-header">Tamagotchi</h3>
 			          <p> Check It Out Below</p>
 			          <button className="flip-box-button" id="black-button">GitHub</button>
 			        </div>
 			      </div>
 			    </div>
 			  </div>
      </div> 
    <div>
      <div className="port-icons">
      <a href="https://www.linkedin.com/in/bdnii/"><img src={linkedIn} alt="" /></a>
      <a href="https://github.com/bdnkai"><img src={gitHub} alt="" /></a> 
      </div>
    </div>
  </div>
  )
}

export default Portfolio