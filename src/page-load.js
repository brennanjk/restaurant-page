
function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    return header;
}

function pageLoad() {
    const element = document.getElementById('content');

    element.append(createHeader());
}

export default pageLoad;