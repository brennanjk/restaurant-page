function clearContent() {
    const mainContainer = document.querySelector('.container');

    //Clear main content section
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    return {clearContent};
}

function createHome() {
    const mainContainer = document.querySelector('.container');

    //create image div
    const image = document.createElement('img');
    image.src = './images/burger.svg';
    image.alt = 'burger image';

    //create review div
    const review = document.createElement('div');
    review.classList.add('review');
    review.textContent = 'The best burgers in town! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea.';

    // append the image and review to the main container div
    mainContainer.appendChild(image);
    mainContainer.appendChild(review);
}

function loadHome() {
    clearContent();
    createHome();
}

export default loadHome;