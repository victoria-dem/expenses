import React from 'react';
import styles from './ModalHeader.module.css';

function ModalHeader(props) {
  return (
    <div>
      <h3 className={styles.header}>Add new expense</h3>
    </div>
  );
}

export default ModalHeader;
