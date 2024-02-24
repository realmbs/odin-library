const myLibrary = [];

function Book(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
}

const addBookToLibrary = (book) => {
  myLibrary.push(book);
}

const bookButton = document.querySelector('.new-book');
bookButton.addEventListener('click', () => {
  const title = prompt('Enter the title of the book');
  const author = prompt('Enter the author of the book');
  const read = prompt('Have you read the book? yes / no') === 'yes'.toLowerCase() || 'y'.toLowerCase ? true : false;
  addBookToLibrary(new Book(title, author, read));
  myLibrary.forEach(book => {
    const newBook = document.createElement('div');
    newBook.classList.add('book');
    newBook.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>Read? ${book.read}</p>
      `
    library.appendChild(newBook);
  })
})

const libraryContainer = document.querySelector('.library-container');
const library = document.querySelector('.library');