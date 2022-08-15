import {OPEN_ABOUT_ME, OPEN_CONTACT_INFO, OPEN_PORTFOLIO, OPEN_RESUME, TOGGLE_DISPLAY} from './useCases'

function myReducer(state, action) {
  switch (action.type) {
    case TOGGLE_DISPLAY:
      return{
        ...state,
        displayOn: false,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_ABOUT_ME:
      console.log('about me button is working')
      return{
        ...state,
        displayOn: true,
        aboutMe: true,
        myPortfolio: false,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_CONTACT_INFO:
      console.log('contact info button is working')
      return{
        ...state,
        displayOn: true,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: true,
        myResume: false
      }
    case OPEN_PORTFOLIO:
      console.log('portfolio button is working')
      return{
        ...state,
        displayOn: true,
        aboutMe: false,
        myPortfolio: true,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_RESUME:
      console.log('resume button is working')
      return {
        ...state,
        displayOn: true,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: false,
        myResume: true
      }
    case 'default':
      return{
        ...state
      }
  }


  
}

export default myReducer