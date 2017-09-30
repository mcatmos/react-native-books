// @flow

import { combineReducers } from 'redux'
import createStore from './createStore'
import books from './App/Reducer/'
import myBooks from '../Features/MyBooks/Reducer/'
import search from '../Features/Search/Reducer'


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const appReducer = combineReducers({
    books,
    search,
    myBooks
  })

  return createStore(appReducer)
}
