import React from 'react';
import styles from './ModalHeader.module.css';

function ModalHeader({ onClose, type }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClose} />
      <h3 className={styles.header}>
        {type === 'add' ? 'Add new expense' : 'Edit expense'}
      </h3>
    </div>
  );
}

export default ModalHeader;
