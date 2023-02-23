import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");

const cardsMarcup = createGelleryItemMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsMarcup);

galleryEl.addEventListener('click', onGalleryElClick);

function createGelleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;
    })
    .join('');
};

function onGalleryElClick(event) {
  event.preventDefault()
  if (!event.target.classList.contains('gallery__image')) {
    return   
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onClose: document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") instance.close(); 
      }) 
    }
  )
instance.show()
}


