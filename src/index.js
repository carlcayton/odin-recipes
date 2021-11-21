const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-links')[0]
const searchBar = document.getElementsByClassName('search-bar')[0]

toggleButton.addEventListener('click', () => {
   navbarLinks.classList.toggle('active')
   searchBar.classList.toggle('active')
})
