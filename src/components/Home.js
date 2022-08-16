import {useReducer} from 'react'
import {initialState, OPEN_ABOUT_ME, OPEN_CONTACT_INFO, OPEN_PORTFOLIO, OPEN_RESUME, TOGGLE_DISPLAY} from './reducers/useCases'
import myReducer from './reducers/myReducer'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import Portfolio from './Portfolio'
import Resume from './Resume'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'


function Home() {
   const [state, dispatch] = useReducer(myReducer, initialState)
   const {aboutMe, myPortfolio, myContactInfo, myResume, displayOn} = state 

   const displayAboutMe = (event) =>{
      dispatch({
         type: OPEN_ABOUT_ME,
         payload: event,
      });
   }
   const displayPortfolio = (event) =>{
      dispatch({
         type: OPEN_PORTFOLIO,
         payload: event,
      });
   }
   const displayResume = (event) => {
      dispatch({
         type: OPEN_RESUME,
         payload: event,
      });
   }
   const displayContactInfo = (event) => {
      dispatch({
         type: OPEN_CONTACT_INFO,
         payload: event
      });
   }
   const closeDisplay = (event) => {
      dispatch({
         type: TOGGLE_DISPLAY
      })
   }

  return (  
   <div>
   <div className='navigation-container'>
      <div className='full_name'>
         BRANDON NGUYEN
         </div>
      <div className='button-container'>
         <button onClick={displayAboutMe} className='about_me_button'>
            About Me
            </button>
         <button onClick={displayPortfolio} className='portfolio_button'>
            Portfolio
            </button>
         <button onClick={displayResume} className='resume_button'>
            Resume
            </button>
         <button onClick={displayContactInfo} className='contact_me_button'>
            Contact Me
            </button>
         {displayOn ? <button onClick={closeDisplay} className="hide_button">[ Close Display ]</button> : <>{null}</>}
      </div>
   </div>
      <div className='display-container'>
         {aboutMe ? <AboutMe/> : <div>{null}</div>}
         {myPortfolio ? <Portfolio/> : <div>{null}</div>}
         {myResume ? <Resume/> : <div>{null}</div>}
         {myContactInfo ? <ContactMe/> : <div>{null}</div>}
         {!displayOn ? <div className="icons">
             <a href="https://www.linkedin.com/in/bdnii/">
                <img src={linkedIn} alt="linkedin-icon" /></a>
             <a href="https://github.com/bdnkai">
                <img src={gitHub} alt="github-icon" /></a>
            </div> : <div>{null}</div>}
      </div>
   </div>
  )
}

export default Home