export interface PixabayImage {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export interface FetchImagesResult {
  hits: PixabayImage[];
  totalHits: number;
}
