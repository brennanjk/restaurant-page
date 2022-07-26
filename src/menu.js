function clearContent() {
    const mainContainer = document.querySelector('.container');
    
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    console.log('What the Heck');
    return {mainContainer, clearContent};
}

function loadMenu() {
    clearContent();
}

export default loadMenu;