import type { FC, KeyboardEvent } from 'react';
import type { PixabayImage } from '../../types/image';
import css from './ImageGalleryItem.module.css';

interface ImageGalleryItemProps {
  image: PixabayImage;
  onSelect: (image: PixabayImage) => void;
}

export const ImageGalleryItem: FC<ImageGalleryItemProps> = ({ image, onSelect }) => {
  const handleClick = () => {
    onSelect(image);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(image);
    }
  };

  return (
    <li className={css.imageGalleryItem}>
      <div
        role="button"
        tabIndex={0}
        className={css.cardButton}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={`View full-size photo: ${image.tags || 'photo'}`}
      >
        <img
          src={image.webformatURL}
          alt={image.tags || 'Search result photo'}
          className={css.imageGalleryItemImage}
          loading="lazy"
        />
      </div>
    </li>
  );
};

export default ImageGalleryItem;
