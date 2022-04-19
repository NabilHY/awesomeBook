const booksCollection = [];

// Create a function to add a new book to the collection, with title and author.
// DOM Selectors
const booksSection = document.querySelector('.container');
const addBook = document.querySelector('.add-btn');
const titleValue = document.getElementById('title');
const authorValue = document.getElementById('author');

function Books(title, author) {
  this.title = title;
  this.author = author;
  this.id = booksCollection.length + 1;
}

const addUI = () => {
  const book = new Books(titleValue.value, authorValue.value);
  booksCollection.push(book);
  booksSection.innerHTML += `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="rmv-btn" data-id=${book.id} type="button">Remove</button>
        <hr>
        </div>
        `;
  localStorage.setItem('books', JSON.stringify(booksCollection));
  titleValue.value = '';
  authorValue.value = '';
};

// save data to local stoage
const addLS = () => {
  if (localStorage.length > 0) {
    const bookInfo = JSON.parse(localStorage.getItem('books'));
    bookInfo.forEach((book) => {
      booksSection.innerHTML += `
        <div>
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button class="rmv-btn" data-id=${book.id} type="button">Remove</button>
            <hr>
            </div>
            `;
    });
  }
};

const removeLS = (r) => {
  const books = JSON.parse(localStorage.getItem('books'));
  books.filter((book) => book.id !== r);
  localStorage.setItem('books', JSON.stringify(books));
};

booksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('rmv-btn')) {
    e.target.parentElement.remove();
    removeLS(e.target.getAttribute('data-id'));
  }
});

window.addEventListener('DOMContentLoaded', addLS);
addBook.addEventListener('click', addUI);