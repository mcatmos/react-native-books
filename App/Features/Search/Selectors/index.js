export const getBooks = (state) => {
  return state.books ? state.books.results : null
}