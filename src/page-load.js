
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
    homeItem.textContent = "Home";
    
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

function createContainer() {
    // create root container div
    const main = document.createElement('div');
    main.classList.add('container');

    //create image div
    const image = document.createElement('img');
    image.src = './images/burger.svg';
    image.alt = 'burger image';

    //create review div
    const review = document.createElement('div');
    review.classList.add('review');
    review.textContent = 'The best burgers in town! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea.';

    main.appendChild(image);
    main.appendChild(review);

    return main;
}

function createFooter() {
    // create root footer div
    const footer = document.createElement('div');
    footer.classList.add('footer');

    // create text div
    const userTag = document.createElement('div');
    userTag.innerHTML = '&copy brennanjk'

    // create image tag
    const image = document.createElement('img');
    image.src = './images/github-icon.svg';

    // append footer items together
    footer.appendChild(userTag);
    footer.appendChild(image);

    return footer;
}

function pageLoad() {
    const element = document.getElementById('content');

    element.append(createHeader());
    element.appendChild(createContainer());
    element.appendChild(createFooter());
}

export default pageLoad;