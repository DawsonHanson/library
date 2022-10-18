console.log('Test!')

let library = [];

//
console.log(library)
//

function Book (title, author, pages, completed) {
  this.title = title
  this.author = author
  this.pages = pages
  this.completed = completed
} 

function openForm() {
  document.getElementById('form').style.display = 'grid'
}

function closeForm() {
  document.getElementById('form').style.display = 'none'
}

const form = document.getElementById('bookForm');
form.addEventListener('submit', addBookToLibrary)

function addBookToLibrary(event) {
  event.preventDefault();

  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  let completed = document.getElementById('completed').checked
  
  let newBook = new Book(title, author, pages, completed)
  
  library.push(newBook)

  //
  console.log(newBook)
  console.log(library)
  //

  addBookToShelf(newBook)
}

function addBookToShelf(book) {

  const bookShelf = document.querySelector('.book-shelf')
  const addBook = document.createElement('div')
  
    for (let key in book) {
      //
      console.log(`${key}: ${book[key]}`)
      //
      addBook.innerHTML += '<p>' + (`${key}: ${book[key]}`) + '</p>'
    }

    addBook.classList.add('book')
    addButtons(addBook)
    bookShelf.appendChild(addBook)
}

const addButtons = function (addBook) {
  const addButtonContainer = document.createElement('div')
  const addButton1 = document.createElement('button')
  const addButton2 = document.createElement('button')
  addButtonContainer.classList.add('button-container')
  addButton1.textContent = 'Remove'
  addButton2.textContent = 'Status'
  addButton1.classList.add('button-remove')
  addButton2.classList.add('button-status')
  addButtonContainer.appendChild(addButton1)
  addButtonContainer.appendChild(addButton2)
  addBook.appendChild(addButtonContainer)
}