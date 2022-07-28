function clearContent() {
    const mainContainer = document.querySelector('.container');

    //Clear main content section
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    return {mainContainer, clearContent};
}

function createMenu() {
    const mainContainer = document.querySelector('.container');

    // create main menu container
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //create menu item
    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    const itemColumn1 = document.createElement('div');
    const itemName1 = document.createElement('h3');
    itemName1.classList.add('item-name');
    itemName1.textContent = 'Classic Cheeseburger';
    const itemDescription1 = document.createElement('p')
    itemDescription1.classList.add('item-details');
    itemDescription1.textContent = '100% Angus Beef Patty | Cheddar Cheese | Lettuce | Tomatoes | Grilled Onions\n$9.99';
    const image1 = document.createElement('img');
    image1.classList.add('menu-img');
    image1.src = './images/Classic Cheeseburger.jpg';
    image1.alt = 'Classic Cheesburger. Photo Credit Valeria Boltneva';

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    const description2 = document.createElement('div');
    description2.classList.add('item-details');
    description2.textContent = 'Heart Attack Burger';
    const image2 = document.createElement('img');
    image2.classList.add('menu-img');
    image2.src = './images/Heart Attack Burger.jpg';
    image2.alt = 'Heart Attack Burger. Photo Credit Valeria Boltneva';
  
    //append objects 
    itemColumn1.appendChild(itemName1);
    itemColumn1.appendChild(itemDescription1);
    menuItem1.appendChild(itemColumn1);
    menuItem1.appendChild(image1);
    menuItem2.appendChild(description2);
    menuItem2.appendChild(image2)
    menu.appendChild(menuItem1);
    menu.appendChild(menuItem2);
    mainContainer.appendChild(menu);
}

function loadMenu() {
    clearContent();
    createMenu();
}

export default loadMenu;