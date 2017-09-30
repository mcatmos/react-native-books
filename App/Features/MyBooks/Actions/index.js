export const ADD_FAV_BOOK = 'ADD_FAV_BOOK'
export const REMOVE_FAV_BOOK = 'REMOVE_FAV_BOOK'

export const addBook = (book) => {
  return {
    type: ADD_FAV_BOOK,
    payload: {
      id: book.key
    }
  }
}

export const removeBook = (key) => {
  return {
    type: REMOVE_FAV_BOOK,
    payload: {
      id: key
    }
  }
}