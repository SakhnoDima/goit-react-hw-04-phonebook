import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalBody } from './Modal.styles';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloses, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      // закрив по Escspe
      if (event.code === 'Escape') {
        onCloses();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloses]);

  const handleBackDropClick = event => {
    // закрив по бекдроп
    if (event.target === event.currentTarget) {
      onCloses();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <ModalBody>{children}</ModalBody>
    </Backdrop>,
    modalRoot
  );
};
Modal.propTypes = {
  onCloses: PropTypes.func.isRequired,
};
