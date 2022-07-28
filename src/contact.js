function clearContent() {
    const mainContainer = document.querySelector('.container');

    //Clear main content section
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    return {clearContent};
}

function createContacts() {
    const mainContainer = document.querySelector('.container');

    // Add contacts container
    const contacts = document.createElement('div');
    contacts.classList.add('contacts-container');

    // Add location
    const location = document.createElement('div');
    const localTitle = document.createElement('h2');
    localTitle.classList.add('contact-header')
    localTitle.textContent = 'Location';
    const address = document.createElement('p');
    address.classList.add('address');
    address.textContent = '985 Greystone Street\r\nBurbank, IL 60459'

    // append elements to create location div structure
    location.appendChild(localTitle);
    location.appendChild(address);
    contacts.appendChild(location);

    mainContainer.appendChild(contacts);
}

function loadContact() {
    clearContent();
    createContacts();
}

export default loadContact;