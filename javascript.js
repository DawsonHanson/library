let library = [];

function Book (title, author, pages, completed) {
  this.Title = title
  this.Author = author
  this.Pages = pages
  this.Completed = completed
} 

let openFormButton = document.querySelector('.open-form-button')
openFormButton.addEventListener('click', () => {
  document.getElementById('form').style.display = 'grid'
})

let closeFormButton = document.querySelector('.close-form-button')
closeFormButton.addEventListener('click', () => {
  document.getElementById('form').style.display = 'none'
})

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

  addBookToShelf(newBook)
}

function addBookToShelf(book) {

  const bookShelf = document.querySelector('.book-shelf')
  const addBook = document.createElement('div')
  
    for (let key in book) {
      addBook.innerHTML += '<p>' + (`${key}: ${book[key]}`) + '</p>'
    }

    addBook.classList.add('book')
    addButtons(addBook)
    bookShelf.appendChild(addBook)
    setDataAttribute()
}

function setDataAttribute() {
  const books = document.querySelectorAll('.book')
    books.forEach((book, index) => {
      book.setAttribute('num', index)
    })
}

const addButtons = function (addBook) {
  const addButtonContainer = document.createElement('div')
  const addButton1 = document.createElement('button')
  const addButton2 = document.createElement('button')
  addButtonContainer.classList.add('button-container')
  addButton1.textContent = 'Remove'
  addButton2.textContent = 'Status'
  addButton1.setAttribute('id','button-remove')
  addButton2.setAttribute('id','button-status')
  addButtonContainer.appendChild(addButton2)
  addButtonContainer.appendChild(addButton1)
  addBook.appendChild(addButtonContainer)
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.id== 'button-remove') {

    // removing book from dom and library array
    let currentBook = event.target.parentElement.parentElement
    currentBook.remove()
    let numOfCurrentBook = currentBook.getAttribute('num')
    
    library.splice(numOfCurrentBook, 1)
    //

    // needed to reset attributes as wont work if removing multiple books
    // without adding another first
    setDataAttribute()
  }
}) 

document.addEventListener('click', function(event) {
  if (event.target && event.target.id== 'button-status') {

    let currentBook = event.target.parentElement.parentElement
    let numOfCurrentBook = currentBook.getAttribute('num')
    let currentBookObject = library.at(numOfCurrentBook)
    let completedTextLine = event.target.parentElement.previousSibling

    if (currentBookObject.Completed == false) {
      currentBookObject.Completed = true
      completedTextLine.textContent = 'Completed: true'
    } else {
      currentBookObject.Completed = false
      completedTextLine.textContent = 'Completed: false'
    }
  }
}) 