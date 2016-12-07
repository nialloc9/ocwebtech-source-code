import { combineReducers } from "redux"

import navBar from './navBarReducer'
import landingPage from './landingPageReducer'

export default combineReducers({
  navBar,
  landingPage,
})
