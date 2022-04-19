const booksCollection = [];

// Create a function to add a new book to the collection, with title and author.
// DOM Selectors
const booksSection = document.querySelector('.container');
const addBook = document.querySelector('.add-btn');
const titleValue = document.getElementById('title');
const authorValue = document.getElementById('author');

function Books(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
}

const addUI = () => {
  const book = new Books(titleValue.value, authorValue.value);
  booksCollection.push(book);
  booksSection.innerHTML += `
    <div>
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class="rmv-btn" type="button">Remove</button>
        <hr>
        </div>
        `;
  titleValue.value = '';
  authorValue.value = '';
};
addBook.addEventListener('click', addUI);