//body selection:
const bodyDiv = document.querySelector('body');

//galleryDiv:
const gallery = document.createElement('div');
gallery.classList.add('galleryDiv');

//gallery left button:
const galleryLeft = document.createElement('button');
galleryLeft.classList.add('galleryButtons');
galleryLeft.textContent = '<';
gallery.appendChild(galleryLeft);

//gallery right button:
const galleryRight = document.createElement('button');
galleryRight.classList.add('galleryButtons');
galleryRight.textContent = '>';
gallery.appendChild(galleryRight);

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
    bodyDiv.removeChild(gallery);
});

//click to gallery buttons, preventing propagation to the body:
galleryButtons.forEach(addEventListener('click', (event) => {
    event.stopPropagation(containerDiv);  
}));

//image carousel:
