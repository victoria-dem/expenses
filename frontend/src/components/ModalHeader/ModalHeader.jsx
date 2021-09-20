import React from 'react';
import styles from './ModalHeader.module.css';

function ModalHeader({ onClose }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClose} />
      <h3 className={styles.header}>Add new expense</h3>
    </div>
  );
}

export default ModalHeader;
