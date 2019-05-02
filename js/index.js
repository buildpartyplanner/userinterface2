//body selection:
const bodyDiv = document.querySelector('body');

//galleryDiv:
const gallery = document.createElement('div');
gallery.classList.add('galleryDiv');

//gallery left button:
const galleryLeft = document.createElement('button');
galleryLeft.classList.add('galleryButtons');
galleryLeft.classList.add('left-button');
galleryLeft.textContent = '<';
gallery.appendChild(galleryLeft);

//gallery right button:
const galleryRight = document.createElement('button');
galleryRight.classList.add('galleryButtons');
galleryRight.classList.add('right-button');
galleryRight.textContent = '>';
gallery.appendChild(galleryRight);

//gallery images:
const image1 = document.createElement('img');
image1.classList.add('images');
image1.src = 'https://images.unsplash.com/photo-1485872299829-c673f5194813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1382&q=80';
const image2 = document.createElement('img');
image2.classList.add('images');
image2.src = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjMwNjY3fQ&auto=format&fit=crop&w=1500&q=80";
const image3 = document.createElement('img');
image3.classList.add('images');
image3.src = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80';



//container selection:
const containerDiv = document.querySelector('.container');
//gallery link selection (nav):
const galleryLink = document.querySelector('.gallery');
//gallery buttons selection:
const galleryButtons = document.querySelectorAll('.galleryButtons');

//click to gallery link in nav, prepends pop-up gallery div:
galleryLink.addEventListener('click', (event) => {
    event.stopPropagation(containerDiv);
    bodyDiv.prepend(gallery);
});





//general click to the body, removes pop-up gallery div:
containerDiv.addEventListener('click', () => {
    if (bodyDiv.contains(gallery) === false) {
        return;
    }
    bodyDiv.removeChild(gallery);
});