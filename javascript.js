console.log('Test!')

function openForm() {
  document.getElementById('form').style.display = 'grid'
}

function closeForm() {
  document.getElementById('form').style.display = 'none'
}

let library = [];

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {

}