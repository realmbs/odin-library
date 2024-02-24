const myLibrary: Book[] = [];

class Book {
  title: string;
  author: string;
  read: boolean;

  constructor(title: string, author: string, read: boolean) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

function addBookToLibrary(title: string, author: string, read: boolean) {
  const newBook: Book = new Book(title, author, read);
  myLibrary.push(newBook);
}

const container = document.querySelector('.container') as HTMLDivElement;
const bookButton = document.createElement('button') as HTMLButtonElement;
bookButton.textContent = 'Add Book';
bookButton.classList.add('btn');
container.appendChild(bookButton);

bookButton.addEventListener('click', () => {
  const title = String(prompt('Enter the title of the book'));
  const author = String(prompt('Enter the author of the book'));
  const read = prompt('Have you read this book?') === 'yes' || 'y' ? true : false;
  addBookToLibrary(title, author, read);
  bookHandler(myLibrary[myLibrary.length - 1]);
})

for (let i = 0; i < myLibrary.length; i++) {
  const book = myLibrary[i];
  console.log(myLibrary[i]);
}

const bookHandler = (book: Book) => {
  const bookCard = document.createElement('div');
  bookCard.classList.add('book-card');
  const title = document.createElement('h3');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = book.author;
  const read = document.createElement('p');
  read.textContent = book.read ? 'Read' : 'Not Read';
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('btn');
  removeButton.addEventListener('click', () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    bookCard.remove();
  })
  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(read);
  bookCard.appendChild(removeButton);
  container.appendChild(bookCard);
}

// next: add local storage
// next: add a read button
// next: add a form to add books