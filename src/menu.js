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
    const description1 = document.createElement('div');
    description1.classList.add('item-details');
    description1.textContent = 'Test item';
  
    //append objects 
    menuItem1.appendChild(description1);
    menu.appendChild(menuItem1);
    mainContainer.appendChild(menu);
}

function loadMenu() {
    clearContent();
    createMenu();
}

export default loadMenu;