
function createHeader() {
    //create main header div
    const header = document.createElement('div');
    header.classList.add('header');

    //creater header title for Restaurant name
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('rest-name');
    headerTitle.textContent="Moe's Burger Joint";

    //create restaurant header list/menu
    const headerList = document.createElement('ul');
    headerList.classList.add('header-menu');

    //create header list items and append them to the headerList
    const homeItem = document.createElement('li');
    homeItem.classList.add('home');
    homeItem.classList.add('header-item');
    homeItem.textContent="Home";
    
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu');
    menuItem.classList.add('header-item');
    menuItem.textContent = "Menu";

    const contactItem = document.createElement('li');
    contactItem.classList.add('contact');
    contactItem.classList.add('header-item');
    contactItem.textContent = "Contact";

    headerList.appendChild(homeItem);
    headerList.appendChild(menuItem);
    headerList.appendChild(contactItem);

    //append header content to header div
    header.appendChild(headerTitle);
    header.appendChild(headerList);

    return header;
}

function pageLoad() {
    const element = document.getElementById('content');

    element.append(createHeader());
}

export default pageLoad;