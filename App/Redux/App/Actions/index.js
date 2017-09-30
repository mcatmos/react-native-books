export const ADD_BOOKS = 'ADD_BOOKS'

export const addBooks = (action) => {
  const { docs } = action
  return {
    type: ADD_BOOKS,
    payload: {
      results: docs
    }
  }
}