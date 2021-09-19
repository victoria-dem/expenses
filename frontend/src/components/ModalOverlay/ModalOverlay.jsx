import React from 'react';
import styles from './ModalOverlay.module.css';

function ModalOverlay({ onClose }) {
  return <div className={styles.backdrop} onClick={onClose} />;
}

export default ModalOverlay;
