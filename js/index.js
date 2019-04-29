const galleryLink = document.querySelector('.gallery');
const gallery = document.createElement('div');
gallery.style.width = '70%';
gallery.style.height = '500px';
gallery.style.opacity = '0.6';
gallery.style.backgroundColor = 'black';
gallery.style.borderRadius = '5%';
gallery.style.position = 'fixed';
gallery.style.margin = '5% auto 5% 15%';
const bodyDiv = document.querySelector('body');
galleryLink.addEventListener('click', (event) => {
    event.stopPropagation(bodyDiv);
    bodyDiv.prepend(gallery);
});
bodyDiv.addEventListener('click', () => {
    bodyDiv.removeChild(gallery);
});