import cityReducer from './cityReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  cityR:cityReducer
})

export default rootReducer