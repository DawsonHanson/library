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

function Book (title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  // this.read = read (for checkbox)
}

let form = document.getElementById('bookForm'); 

function addBookToLibrary(event) {
  event.preventDefault();

  let title = document.getElementById('title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  
  let newBook = new Book(title, author, pages)
  
  library.push(newBook)
  //
  console.log(newBook)
  console.log(library)
  //
}
form.addEventListener('submit', addBookToLibrary)