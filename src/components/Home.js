import {useReducer} from 'react'
import {initialState, OPEN_ABOUT_ME, OPEN_CONTACT_INFO, OPEN_PORTFOLIO, OPEN_RESUME} from './reducers/useCases'
import myReducer from './reducers/myReducer'
import '../css/home.css'

function Home() {
   const [state, dispatch] = useReducer(myReducer, initialState)


  return (  
   <div className='navigation-container'>
    <div className='full_name'>BRANDON NGUYEN</div>
   
    <button className='about_me_button'>About Me</button>
    <button className='portfolio_button'>Portfolio</button>
    <button className='resume_button'>Resume</button>
    <button className='contact_me_button'>Contact Me</button>
   </div>
  )
}

export default Home