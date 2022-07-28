function clearContent() {
    const mainContainer = document.querySelector('.container');

    //Clear main content section
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    return {mainContainer, clearContent};
}

//Create array to hold all menu items in the form of objects
const menuItems = [
    {name: 'Classic Cheeseburger', description: '100% Angus Beef Patty | Cheddar Cheese | Lettuce | Tomatoes | Grilled Onions\r\n$9.99', imageSrc:'./images/Classic Cheeseburger.jpg', imageAlt: 'Classic Cheesburger. Photo Credit Valeria Boltneva'},
    {name: 'Heart Attack Burger', description: '100% Angus Beef Patty | Hard Boiled Egg | Lettuce | Tomatoes\r\n$10.99', imageSrc: './images/Classic Cheeseburger.jpg', imageAlt: 'Classic Cheesburger. Photo Credit Valeria Boltneva'},
    {name: 'Monster Burger', description: 'Double 100% Angus Beef Patties | Double Slices of Cheddar Cheese | 4 Slices Crispy Bacon | Secret Sauce\r\n$12.99', imageSrc: './images/Monster-Burger.jpg', imageAlt: 'Monster Burger. Photo Credit Adrian Dorobantu',}
]

function createMenu() {
    const mainContainer = document.querySelector('.container');

    // create main menu container
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // create menu item Dom elements leveraging the object keys above in the menuItems array
    function addItems(items) {
        items.forEach(function(item) {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');
            const itemColumn = document.createElement('div');
            const itemName = document.createElement('h3');
            itemName.classList.add('item-name');
            itemName.textContent = item.name;
            const itemDescription = document.createElement('p');
            itemDescription.classList.add('item-details');
            itemDescription.textContent = item.description;
            const image = document.createElement('img');
            image.classList.add('menu-img');
            image.src = item.imageSrc;
            image.alt = item.imageAlt;

            //append above elements to create HTML structure and append to the menuitem to the main container
            itemColumn.appendChild(itemName);
            itemColumn.appendChild(itemDescription);
            menuItem.appendChild(itemColumn);
            menuItem.appendChild(image);
            menu.appendChild(menuItem);
            mainContainer.appendChild(menu);
        })
    }
    //run function using menuItems array defined above
    addItems(menuItems);
}

function loadMenu() {
    clearContent();
    createMenu();
}

export default loadMenu;