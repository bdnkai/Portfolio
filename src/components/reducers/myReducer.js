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
      return{
        ...state,
        displayOn: true,
        aboutMe: true,
        myPortfolio: false,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_CONTACT_INFO:
      return{
        ...state,
        displayOn: true,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: true,
        myResume: false
      }
    case OPEN_PORTFOLIO:
      return{
        ...state,
        displayOn: true,
        aboutMe: false,
        myPortfolio: true,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_RESUME:
      return {
        ...state,
        displayOn: true,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: false,
        myResume: true
      }
  }


  
}

export default myReducer