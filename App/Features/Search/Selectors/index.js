export const getBooks = (state) => {
  const { books, search } = state
  
  if (search.results) {
    return search.results.map(id => {
      return books[id]
    })
  }
  return null
}