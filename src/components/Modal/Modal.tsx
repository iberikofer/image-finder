import { useEffect } from 'react';
import type { FC, MouseEvent } from 'react';
import css from './Modal.module.css';

interface ModalProps {
  selectedImage: string;
  altText?: string;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({
  selectedImage,
  altText = '',
  closeModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    // Lock body scrolling while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeModal]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div
      className={css.overlay}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <div className={css.modal}>
        <button
          type="button"
          className={css.closeButton}
          onClick={closeModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <img
          src={selectedImage}
          alt={altText || 'Full size photo preview'}
          className={css.modalImage}
        />
      </div>
    </div>
  );
};

export default Modal;
