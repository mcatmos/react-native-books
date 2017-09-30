import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REMOVE_FAV_BOOK,
  ADD_FAV_BOOK,
} from '../Actions/'

const myBooks = (state = [], action) => {
  switch (action.type) {
    case ADD_FAV_BOOK:
      return state.concat(action.payload.id)
    break
    case REMOVE_FAV_BOOK: 
      return state
    break
    default:
      return state
  }
}

export default myBooks