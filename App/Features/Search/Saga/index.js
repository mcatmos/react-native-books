import { 
  call, 
  put, 
  takeLatest, 
  all 
} from 'redux-saga/effects'
import { successSearch, failureSearch } from '../Actions/'
import { Actions as NavigationActions } from 'react-native-router-flux'

export function* requestSearch(api, action) {
  const { 
    query
  } = action.payload
  const response = yield call(api.requestSearch, query)
  console.log(response)
  if (response.ok) {
    yield put(successSearch(response.data))
  } else {
    yield put(failureSearch())
  }
}