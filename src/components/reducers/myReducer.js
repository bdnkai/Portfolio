import {OPEN_ABOUT_ME, OPEN_CONTACT_INFO, OPEN_PORTFOLIO, OPEN_RESUME} from './useCases'

function myReducer(state, action) {
  switch (action.type) {
    case OPEN_ABOUT_ME:
      console.log('about me button is working')
      return{
        ...state,
        aboutMe: true,
        myPortfolio: false,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_CONTACT_INFO:
      console.log('contact info button is working')
      return{
        ...state,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: true,
        myResume: false
      }
    case OPEN_PORTFOLIO:
      console.log('portfolio button is working')
      return{
        ...state,
        aboutMe: false,
        myPortfolio: true,
        myContactInfo: false,
        myResume: false
      }
    case OPEN_RESUME:
      console.log('resume button is working')
      return {
        ...state,
        aboutMe: false,
        myPortfolio: false,
        myContactInfo: false,
        myResume: true
      }
  }


  
}

export default myReducer