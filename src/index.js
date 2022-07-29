import loadPage from './page-load.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

function menuBottons() {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');

    home.addEventListener('click', loadHome);
    menu.addEventListener('click',loadMenu);
    contact.addEventListener('click', loadContact);
}

loadPage();
menuBottons();
