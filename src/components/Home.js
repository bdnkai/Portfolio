import {useReducer} from 'react'
import {initialState, OPEN_ABOUT_ME, OPEN_CONTACT_INFO, OPEN_PORTFOLIO, OPEN_RESUME} from './reducers/useCases'
import myReducer from './reducers/myReducer'
import AboutMe from './AboutMe'


function Home() {
   const [state, dispatch] = useReducer(myReducer, initialState)

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

  return (  
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
      </div>
   </div>
  )
}

export default Home