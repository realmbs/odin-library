const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

const addBookToLibrary = (book) => {
  myLibrary.push(book);
}

addBookToLibrary(new Book('Leviathan Wakes', 'James S.A. Corey', true));
addBookToLibrary(new Book('Snow Crash', 'Neal Stephenson', true))

for (let i = 0; i < myLibrary.length; i++) {
  console.log(myLibrary[i]);
}
