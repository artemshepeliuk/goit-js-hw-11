import axios from 'axios';
    
const API_KEY = '49391267-a4a459152a4326aa641ed2d74';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (searchQuery) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images', error);
    throw error;
  }
};