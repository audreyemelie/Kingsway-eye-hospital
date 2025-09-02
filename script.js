// craeting variables
let navBar = document.querySelector(".nav-links");
let hamburgerMenu = document.querySelector(".ham-menu");

// craete a functipon
function toggleMenu() {
  navBar.classList.toggle("active");
}
// craete an eventlistener
hamburgerMenu.addEventListener("click", toggleMenu);
