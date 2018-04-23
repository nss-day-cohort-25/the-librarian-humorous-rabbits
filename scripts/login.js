//Ask for user ID
let userId = prompt('Please enter your library card number:','ex 18762')

// Direct according to response to the prompt
if (!(isNaN(userId))) {
  window.location = "/customer.html"
} else if (userId === "librarian") {
  window.location = "/librarian.html"
} else {
  // console.log("else")
  const info = document.querySelector('#info')
  info.appendChild(createp("We don't recognize that card number. Please try again or see the librarian for a new card!"))
}
