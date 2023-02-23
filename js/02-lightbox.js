import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const cardsMarcup = createGelleryItemMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', cardsMarcup);

function createGelleryItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join('');
};

let gallery = new SimpleLightbox('.gallery__item', {
    captionType: "attr",
    captionsData: "alt",
    captionPosition: 'bottom',
    captionDelay: 250,  
});
