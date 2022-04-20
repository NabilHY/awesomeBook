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
        <div class="items">
            <p>${book.title}</p>
            <p>${book.author}</p>
            <button class="rmv-btn" data-id=${book.id} type="button">Remove</button><br/><br/>
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
          <div class="items">
              <p>${book.title}</p>
              <p>${book.author}</p>
              <button class="rmv-btn" data-id=${book.id} type="button">Remove</button><br/><br/>
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
addBook.addEventListener('click', (e) => {
  e.preventDefault();
  Methods.addUI();
});

// select sections
const viewBooks = document.querySelector('#book-list');
const viewAddBook = document.querySelector('#add-new');
const  vieContact = document.querySelector('#contact');
// 
const displayBookSec = document.querySelector('.container');
const  fieldAddSec = document.querySelector('.field-add');
const contactSec =document.querySelector('.contact');
// add event listners
console.log(displayBookSec);
viewBooks.addEventListener('click', () =>{
  viewBooks.style.display = "block";
  displayBookSec.style.display = "flex";
  fieldAddSec.style.display = "none";
  contactSec.style.display = "none";
} );

viewAddBook.addEventListener('click', () =>{
  fieldAddSec.style.display = "flex";
  displayBookSec.style.display = "none";
  contactSec.style.display = "none";
} );

vieContact.addEventListener('click', () =>{
  contactSec.style.display = "flex";
  fieldAddSec.style.display = "none";
  displayBookSec.style.display = "none";
} );

