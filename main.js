/* eslint-disable max-classes-per-file */
// Create a function to add a new book to the collection, with title and author.
// DOM Selectors
const booksSection = document.querySelector('.container');
const addBook = document.querySelector('.add-btn');
const titleValue = document.getElementById('title');
const authorValue = document.getElementById('author');

class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now();
  }
}

class Methods {
  static addUI() {
    let booksCollection;
    if (localStorage.getItem('books') === null) {
      booksCollection = [];
    } else {
      booksCollection = JSON.parse(localStorage.getItem('books'));
    }
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
  }

  static addLS() {
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
  }

  static removeLS(r) {
    const books = JSON.parse(localStorage.getItem('books'));
    books.forEach((book, index) => {
      // eslint-disable-next-line eqeqeq
      if (book.id == r) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// save data to local stoage

booksSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('rmv-btn')) {
    e.target.parentElement.remove();
    Methods.removeLS(e.target.getAttribute('data-id'));
  }
});

window.addEventListener('DOMContentLoaded', Methods.addLS);
addBook.addEventListener('click', Methods.addUI);
