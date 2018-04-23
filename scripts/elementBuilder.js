// ********* Generic Functions *********
// Create h1
const createh1 = (text) => {
  const newNode = document.createElement('h1')
  newNode.textContent = text
  return newNode
}

// Create h2
const createh2 = (text) => {
  const newNode = document.createElement('h2')
  newNode.textContent = text
  return newNode
}

// Create h3
const createh3 = (text) => {
  const newNode = document.createElement('h3')
  newNode.textContent = text
  return newNode
}

// Create h4
const createh4 = (text) => {
  const newNode = document.createElement('h4')
  newNode.textContent = text
  return newNode
}

// Create h5
const createh5 = (text) => {
  const newNode = document.createElement('h5')
  newNode.textContent = text
  return newNode
}

// Create paragraph
const createp = (text) => {
  const newNode = document.createElement('p')
  newNode.textContent = text
  return newNode
}

// Create list item
const createli = (text) => {
  const newNode = document.createElement('li')
  newNode.textContent = text
  return newNode
}


// ********* Component Specific Functions *********
// Create Genre Button
const createGenreButton = (text) => {
  const newNode = document.createElement('button')
  newNode.setAttribute("class", "genre-button")
  newNode.textContent = text
  return newNode
}