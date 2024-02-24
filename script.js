var myLibrary = [];
var Book = /** @class */ (function () {
    function Book(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
    return Book;
}());
function addBookToLibrary(title, author, read) {
    var newBook = new Book(title, author, read);
    myLibrary.push(newBook);
}
var container = document.querySelector('.container');
var bookButton = document.createElement('button');
// Book button - for testing purposes
// bookButton.textContent = 'Add Book';
// bookButton.classList.add('btn');
// container.appendChild(bookButton);
// bookButton.addEventListener('click', () => {
//   const title = String(prompt('Enter the title of the book'));
//   const author = String(prompt('Enter the author of the book'));
//   const read = prompt('Have you read this book?') === 'yes' || 'y' ? true : false;
//   addBookToLibrary(title, author, read);
//   bookHandler(myLibrary[myLibrary.length - 1]);
// })
for (var i = 0; i < myLibrary.length; i++) {
    var book = myLibrary[i];
    console.log(myLibrary[i]);
}
var bookHandler = function (book) {
    var bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    var title = document.createElement('h3');
    title.textContent = book.title;
    var author = document.createElement('p');
    author.textContent = book.author;
    var read = document.createElement('p');
    read.textContent = book.read ? 'Read' : 'Not Read';
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('btn');
    removeButton.addEventListener('click', function () {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        bookCard.remove();
    });
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(read);
    bookCard.appendChild(removeButton);
    container.appendChild(bookCard);
};
// next: add a form to add books
var form = document.createElement('form');
form.classList.add('form');
var titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.placeholder = 'Title';
var authorInput = document.createElement('input');
authorInput.type = 'text';
authorInput.placeholder = 'Author';
var readInput = document.createElement('input');
readInput.type = 'checkbox';
readInput.id = 'read';
var readLabel = document.createElement('label');
readLabel.textContent = 'Read';
readLabel.htmlFor = 'read';
var submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.classList.add('btn');
form.appendChild(titleInput);
form.appendChild(authorInput);
form.appendChild(readInput);
form.appendChild(readLabel);
form.appendChild(submitButton);
container.appendChild(form);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addBookToLibrary(titleInput.value, authorInput.value, readInput.checked);
    bookHandler(myLibrary[myLibrary.length - 1]);
    titleInput.value = '';
    authorInput.value = '';
    readInput.checked = false;
});
// next: add local storage
