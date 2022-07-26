import loadPage from './page-load.js';
import loadMenu from './menu.js';

function menuBottons() {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('contact');

    menu.addEventListener('click',loadMenu);
}

loadPage();
menuBottons();
