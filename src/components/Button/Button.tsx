import type { FC } from 'react';
import css from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ onClick, isLoading = false }) => {
  return (
    <div className={css.buttonContainer}>
      <button
        type="button"
        className={css.button}
        onClick={onClick}
        disabled={isLoading}
        aria-label="Load more images"
      >
        {isLoading ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
};

export default Button;
