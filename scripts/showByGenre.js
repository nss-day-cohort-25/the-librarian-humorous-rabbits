// Create Fragment
const libFrag = document.createDocumentFragment()
// Create node for div
const genre = document.querySelector('#genre')

// Create header to show title of section on page
libFrag.appendChild(createh1("Show books by genre:"))

// Show buttons on Librarian.html under #genre div
libFrag.appendChild(createGenreButton("Romance"))
libFrag.appendChild(createGenreButton("SciFi"))
libFrag.appendChild(createGenreButton("Children"))
// Depending on which buttons are pushed, display the correct genre of book

// To do this, on button click:
// 1. Destroy current element. 
// 2. Create elements for books that match that genre.

// append Fragment to genre ID
genre.appendChild(libFrag)