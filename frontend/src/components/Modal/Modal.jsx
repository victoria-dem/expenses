import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
const modalRoot = document.getElementById('react-modals');

function Modal({ onClose, header, children }) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose(e);
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        {/*<ModalHeader header={header} onClose={onClose} />*/}
        <ModalHeader />
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot
  );
}

export default Modal;
