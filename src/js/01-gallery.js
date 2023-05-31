import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
// 1.Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
const galleryMarkupContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryMarkupContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
// 2.Реализация делегирования на div.gallery и получение url большого изображения.
// 4.Открытие модального окна по клику на элементе галереи.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
// 5.Изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.Запрети это поведение по умолчанию.
galleryMarkupContainer.addEventListener('click', onOpenModalWindow);

function onOpenModalWindow(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const gallery = basicLightbox.create(
    `
	<img width="1200" height="700" src="${e.target.dataset.source}">
`,
    {
      closable: true,
      onShow: gallery => {
        window.addEventListener('keydown', onEsckeyPress);
      },

      onClose: gallery => {
        window.removeEventListener('keydown', onEsckeyPress);
      },
    },
  );
  gallery.show();

  function onEsckeyPress(e) {
    if (e.code === 'Escape') {
      gallery.close();
      console.log('gallery = ', gallery);
    }
  }
}