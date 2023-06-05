import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click', onImgClick);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </li>`;
    })
    .join('');
}


function onImgClick(e) {
  e.preventDefault();
  const path = e.target.dataset.source;
  const description = e.target.alt;

  const instance = basicLightbox.create(
    `<img src="${path}" width="1280" height="auto" alt="${description}">`,
    {
      onShow: () => {
        window.addEventListener('keydown', (event) => onEscKeyPress(event, instance));
      },
      onClose: () => {
        window.removeEventListener('keydown',  (event) => onEscKeyPress(event, instance));
      },
    });
    instance.show();
}

function onEscKeyPress(e, instance) {
  if (e.code !== 'Escape') return;
  instance.close();
}