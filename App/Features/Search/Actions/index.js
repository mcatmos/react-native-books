export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const SUCCESS_SEARCH = 'SUCCESS_SEARCH'
export const ERROR_SEARCH = 'ERROR_SEARCH'

export const requestSearch = (query) => {
  return {
    type: REQUEST_SEARCH,
    payload: {
      query
    }
  }
}

export const successSearch = (action) => {
  const { docs } = action
  return {
    type: SUCCESS_SEARCH,
    payload: {
      results: docs
    }
  }
}

export const failureSearch = () => {
  return {
    type: ERROR_SEARCH,
    payload: {
      error: true
    }
  }
}