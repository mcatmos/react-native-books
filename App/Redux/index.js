// @flow

import { combineReducers } from 'redux'
import createStore from './createStore'
import books from '../Features/Search/Reducer/'


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    books
  })

  return createStore(appReducer)
}
