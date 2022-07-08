function findAccountById(accounts, id) {
  for (let obj in accounts){
    let account = accounts[obj];
    if (account.id === id) return account
  }
}

function sortAccountsByLastName(accounts) {
  // const lastName = accounts.name.last;
  const result = accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  for (let book of books){
    for (let borrow of book.borrows){
      if (borrow.id === account.id) result++
    }
  }
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = books.filter((book) => book.borrows[0].id === account.id && book.borrows[0].returned === false);
  return borrowedBooks.map((book) => {
    return {...book, author:authors.find((author) => author.id === book.authorId)}
    })
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
