import Immutable from 'seamless-immutable'
import _ from 'lodash'
import {
  ADD_BOOKS
} from '../Actions/'

const INITIAL_STATE = Immutable({
  books: null
})

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOOKS:
      const { results } = action.payload
      const books = _.mapKeys(results, 'key')
      return _.merge({}, state.books, books)
    break
    default:
      return state
  }
}

export default books