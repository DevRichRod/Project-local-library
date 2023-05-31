function sortByPopularity(unsortedArr) { 
  return unsortedArr.sort((firstObj, secondObj) => firstObj.count > secondObj.count ? -1 : 1) }

function getTotalBooksCount(books) {
  let result = 0
  for (let i in books){
    let book = books[i];
    result += 1
  }
  return result
}

function getTotalAccountsCount(accounts) {
  let result = 0
  for (let i in accounts){
    let account = accounts[i];
    result += 1
  }
  return result
}

function getBooksBorrowedCount(books) {
  let result = 0
  for (let book of books){
    if (book.borrows[0].returned === false) result++
  }
  return result
}

function getMostCommonGenres(books) {
  const genresOfBooks = books.map((book) => book.genre);
  const genres = {};
  for (const genre of genresOfBooks){
    if (genres[genre] === undefined){
      genres[genre] = {name: genre, count: 0}
    }
    genres[genre].count++
  }
  return Object.values(genres).sort((a, b) => b.count - a.count).slice(0, 5)
}

function getMostPopularBooks(books) {
  const popular = books.map(book =>({name: book.title, count: book.borrows.length}));
  return sortByPopularity(popular).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];
  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0; 
    for (let book of books) { 
      if (author.id === book.authorId) { 
        count += book.borrows.length; 
      } 
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject); 
  }
    return sortByPopularity(popularAuthors).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
