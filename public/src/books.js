function findAuthorById(authors, id) {
  for (let obj in authors){
    let author = authors[obj];
    if (author.id === id) return author
  }
}

function findBookById(books, id) {
  for (let obj in books){
    let book = books[obj];
    if (book.id === id) return book
  }
}

function partitionBooksByBorrowedStatus(books) {
  let result = [[],[]];
  for (let book of books){
    book.borrows[0].returned === false ? result[0].push(book) : result[1].push(book);
  }
  return result
}

function getBorrowersForBook(book, accounts) {
  let result = [];
  for (let borrowed of book.borrows){
    for (let account of accounts){
      if (borrowed.id === account.id){
        account = {...account, returned: borrowed.returned};
        result.push(account);
      }
    }
  }
  return result.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
