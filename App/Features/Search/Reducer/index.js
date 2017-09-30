import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  REQUEST_SEARCH,
  SUCCESS_SEARCH,
  ERROR_SEARCH
} from '../Actions/'

const INITIAL_STATE = Immutable({
  isFetching: false,
  results: null,
  page: 0,
  error: false
})

const search = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_SEARCH:
      return {
        ...state,
        isFetching: true,
        error: false
      }
    break
    case SUCCESS_SEARCH: 
      const { results } = action.payload
      const mapBooks = _.mapKeys(results, 'key')
      console.log(mapBooks)
      const bookIds = Object.keys(mapBooks)
      console.log(bookIds)
      return {
        ...state,
        isFetching: false,
        results: _.union(bookIds, state.results)
      }
    break
    case ERROR_SEARCH:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}

export default search