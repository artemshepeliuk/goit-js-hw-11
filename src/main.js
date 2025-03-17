import { fetchImages } from './js/pixabay-api.js';
import { showLoader, hideLoader, clearGallery, renderImages, showNoImagesFoundMessage } from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = form.querySelector('input[name="search-text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Input error',
      message: 'Please enter a search term.',
    });
    return;
  }

  searchInput.value = '';
  
  showLoader();
  clearGallery();

  try {
    const images = await fetchImages(query);

    if (images.length === 0) {
      showNoImagesFoundMessage();
    } else {
      renderImages(images);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader();
  }
});
