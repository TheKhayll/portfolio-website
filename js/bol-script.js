// Drop-down menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Change icon to 'X' icon
    navbar.classList.toggle('active'); // Show/hide navbar
}

