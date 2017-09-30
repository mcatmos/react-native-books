export const getMyBooks = (state) => {
  const { books, myBooks } = state
  
    if (myBooks) {
      return myBooks.map(id => {
        return books[id]
      })
    }
    return null
}