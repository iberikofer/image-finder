import type { FC } from 'react';
import type { PixabayImage } from '../../types/image';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  images: PixabayImage[];
  onSelect: (image: PixabayImage) => void;
}

export const ImageGallery: FC<ImageGalleryProps> = ({ images, onSelect }) => {
  return (
    <ul className={css.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
