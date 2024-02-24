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
bookButton.textContent = 'Add Book';
bookButton.classList.add('btn');
container.appendChild(bookButton);
bookButton.addEventListener('click', function () {
    var title = String(prompt('Enter the title of the book'));
    var author = String(prompt('Enter the author of the book'));
    var read = prompt('Have you read this book?') === 'yes' || 'y' ? true : false;
    addBookToLibrary(title, author, read);
    bookHandler(myLibrary[myLibrary.length - 1]);
});
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
// next: add local storage
// next: add a read button
// next: add a form to add books
