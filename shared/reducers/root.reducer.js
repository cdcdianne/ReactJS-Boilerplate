import { combineReducers } from 'redux'
import exampleReducer from './example.reducer'

const reducers = combineReducers({
  example: exampleReducer,
})

export default reducers
