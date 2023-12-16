let Menu = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');


Menu.onclick = () => {
    Menu.classList.toggle("bx-x");
    Navbar.classList.toggle('active');
}




