import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryMarkupContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryMarkupContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});