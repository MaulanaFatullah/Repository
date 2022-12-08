const hamburgerMenu = document.querySelector('#hamburger-menu');
const navBar = document.querySelector('#nav-bar');

hamburgerMenu.addEventListener('click', function () {
    navBar.classList.toggle('navbar-active');
    hamburgerMenu.classList.toggle('active');
});