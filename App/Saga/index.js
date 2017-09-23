import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/HTTPServices/Api'
import {
  REQUEST_SEARCH
} from '../Features/Search/Actions/'
import { 
  requestSearch
} from '../Features/Search/Saga/'

const api = API.initializeAPI()

export default function* root() {
  yield all([
    takeLatest(REQUEST_SEARCH, requestSearch, api)
  ])
}
