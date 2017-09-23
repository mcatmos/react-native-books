import { create } from 'apisauce'
import Base64 from '../Base64'

const initializeAPI = () => {
  const api = create({
    baseURL: 'https://openlibrary.org',
    timeout: 20000
  })

  requestSearch = (query) => {
    const params = {
      q: query
    }

    return api.get('/search.json', params)
  }

  return {
    requestSearch
  }
}

export default {
  initializeAPI
}