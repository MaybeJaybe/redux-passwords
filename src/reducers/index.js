import { combineReducers } from 'redux'
import passwordReducer from './reducers'

export default combineReducers({
  passwords: passwordReducer
})