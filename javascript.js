console.log('Test!')

function openForm() {
  document.getElementById('form').style.display = 'grid'
}

function closeForm() {
  document.getElementById('form').style.display = 'none'
}

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

  //
  addLibraryToShelf(library)
  //
}

const form = document.getElementById('bookForm');
form.addEventListener('submit', addBookToLibrary)

function addLibraryToShelf (array) {
  const bookShelf = document.querySelector('.book-shelf')
  const addBook = document.createElement('div')
  const addBookInfo = document.createElement('p')

  array.forEach(function (bookElement) {
    console.log(bookElement.title)
    console.log(bookElement.author)
    console.log(bookElement.pages)
    console.log(bookElement.completed)
    })

    addBook.classList.add('book')
    bookShelf.appendChild(addBook)
  }