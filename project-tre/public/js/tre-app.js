//Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const treIcon = document.querySelector('#tre-icon');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        navMenu.classList.add('nav-padding');
        treIcon.classList.add('tre-icon');
    } else {
        header.classList.remove('navbar-fixed');
        navMenu.classList.remove('nav-padding');
        treIcon.classList.remove('tre-icon');

    }
};

// Nav Menu
const hamburgerMenu = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburgerMenu.addEventListener('click', function () {
    hamburgerMenu.classList.toggle('hamburger-active');
    navMenu.classList.toggle('nav-active');
});