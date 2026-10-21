import axios from 'axios';
import type { PixabayImage, FetchImagesResult } from '../types/image';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY || '';
export const PER_PAGE = 12;

interface PixabayRawHit {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags?: string;
}

interface PixabayApiResponse {
  hits?: PixabayRawHit[];
  totalHits?: number;
}

/**
 * Fetch photos from Pixabay API.
 */
export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<FetchImagesResult> => {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    return { hits: [], totalHits: 0 };
  }

  if (!API_KEY) {
    console.warn(
      'Missing REACT_APP_PIXABAY_API_KEY. Please set your Pixabay API key in the .env file.'
    );
  }

  const response = await axios.get<PixabayApiResponse>(BASE_URL, {
    params: {
      key: API_KEY,
      q: cleanQuery,
      page,
      per_page: PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  const hits: PixabayImage[] = (response.data.hits || []).map(image => ({
    id: image.id,
    webformatURL: image.webformatURL,
    largeImageURL: image.largeImageURL,
    tags: image.tags || '',
  }));

  return {
    hits,
    totalHits: response.data.totalHits || 0,
  };
};
