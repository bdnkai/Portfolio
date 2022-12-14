const OPEN_ABOUT_ME = 'OPEN_ABOUT_ME'
const OPEN_PORTFOLIO = 'OPEN_PORTFOLIO'
const OPEN_CONTACT_INFO = 'OPEN_CONTACT_INFO'
const OPEN_RESUME = 'OPEN_RESUME'
const TOGGLE_DISPLAY = 'TOGGLE_DISPLAY'

const initialState= {
   displayOn: false,
   aboutMe: false,
   myPortfolio: false,
   myContactInfo: false,
   myResume: false,
}

export {
   OPEN_ABOUT_ME,
   OPEN_PORTFOLIO,
   OPEN_CONTACT_INFO,
   OPEN_RESUME,
   TOGGLE_DISPLAY,
   initialState
}