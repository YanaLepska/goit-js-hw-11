import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    formEl: document.querySelector('.form'),
    inputEl: document.querySelector('.query'),
    gallery: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
}

refs.formEl.addEventListener("submit", onFormSubmit);

function createLoader() {
  refs.loader.classList.toggle('hidden');
}

function getImages(q) {
    const searchOptions = new URLSearchParams({
    key: '42132229-e88b92984f0d2a7001cb07c65',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    q,
    });
    const BASE_URL = 'https://pixabay.com/api/';
    const PARAMS = `?${searchOptions}`;
    const url = BASE_URL + PARAMS;
    return fetch(url).then(result => {
        if (result.ok) {
            return result.json();
        } else {
            throw new Error(response.status);
        }
    });
}

function onFormSubmit(e) {
    e.preventDefault();
    createLoader();
    const query = e.target.elements.query.value;
    if (query.trim() === "") {
        createLoader();
      iziToast.show({
        message: 'Please full the input field',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        position: 'topRight',
        });
    }
    else {
        getImages(query).then(data => {
            createLoader();
            if (data.hits.length > 0) {
               renderGalleryItem(data.hits);
            } else {
            refs.gallery.innerHTML = '';
            iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#FFFFFF',
            backgroundColor: '#B51B1B',
            position: 'topRight',
            });
            } 
        }).catch(error => console.error('Error data:', error));  
    }
    e.target.reset();
}
  
function galleryTemplate({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
    return `<li class="gallery-item">
   <a class="gallery-link" href="${largeImageURL}">
   <img class="gallery-image"
   src="${webformatURL}" 
   alt="${tags}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${likes}</span></p>
        <p>Views:<span> ${views}</span></p>
        <p>Comments:<span> ${comments}</span></p>
        <p>Downloads:<span> ${downloads}</span> </p>    
    </div>
  </li>`;
}

let galleryA = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});

function renderGalleryItem(images) {
    const markup = images.map(galleryTemplate).join('');
    refs.gallery.innerHTML = markup;   
   galleryA.refresh();
}

