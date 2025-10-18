const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
const fullImg = document.createElement('img');
lightbox.append(fullImg);
const closeButton = document.createElement('a');
closeButton.href = '#';
closeButton.textContent = '\u2715';
lightbox.append(closeButton);
document.body.prepend(lightbox);

const photogallery = document.querySelector('.photogallery');

photogallery.addEventListener('click', evt => {
    evt.preventDefault();
    if (evt.target.tagName == 'IMG') {
        fullImg.src = evt.target.src;
        lightbox.classList.add('active');
    }
});

closeButton.addEventListener('click', evt => {
    evt.preventDefault();
    lightbox.classList.remove('active');
});

document.body.addEventListener('keydown', evt => {
    if (evt.code == 'Escape')
        lightbox.classList.remove('active');
});
