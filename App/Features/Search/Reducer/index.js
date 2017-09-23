import Immutable from 'seamless-immutable'
import {
  REQUEST_SEARCH,
  SUCCESS_SEARCH,
  ERROR_SEARCH
} from '../Actions/'

const INITIAL_STATE = Immutable({
  fetching: false,
  results: [],
  page: 0,
  error: false
})

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return {
        ...state,
        fetching: true,
        error: false
      }
    break
    case SUCCESS_SEARCH: 
      return {
        ...state,
        fetching: false,
        results: action.payload.results
      }
    break
    case ERROR_SEARCH:
      return {
        ...state,
        fetching: false,
        error: true
      }
    default:
      return state
  }
}

export default books