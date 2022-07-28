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

    // Add contact
    const contact = document.createElement('div');
    const contactTitle = document.createElement('h2');
    contactTitle.classList.add('contact-header');
    contactTitle.textContent = 'Contact Us'
    const contactInfo = document.createElement('p');
    contactInfo.classList.add('contact-info');
    contactInfo.textContent = 'moesburgers@gmail.com\r\n955-555-9555'

    // append elements to create contact div structure
    contact.appendChild(contactTitle);
    contact.appendChild(contactInfo);
    contacts.appendChild(contact);

    // Add Business Hours
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('contact-header');
    hoursTitle.textContent = 'Business Hours';
    const hours = document.createElement('p');
    hours.classList.add('hours');
    hours.textContent = 'Monday | 11am-9pm\r\nTuesday | 11am-9pm\r\nWednesday | 11am-9pm\r\nThursday | 11am-9pm\r\nFriday | 10am-10pm\r\nSaturday | 10am-10pm\r\nSunday | CLOSED'

    //append elements to create hours div structure
    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hours);
    contacts.appendChild(hoursContainer);

    mainContainer.appendChild(contacts);
}

function loadContact() {
    clearContent();
    createContacts();
}

export default loadContact;