import React from 'react';
import { TAX } from '../../utils/constant';
import styles from './TabRow.module.css';

function TabRow({ expense, onEdit, onDelete }) {
  const date = new Date(expense.date).toISOString().slice(0, 10);
  const time = new Date(expense.date).toISOString().slice(11, 16);
  return (
    <li className={styles.row}>
      <span className={styles.row_cell}>{expense.description}</span>
      <span className={styles.row_cell}>{expense.amount}</span>
      <span className={styles.row_cell}>
        {Math.round((expense.amount * TAX + Number.EPSILON) * 100) / 100}
      </span>
      <span className={styles.row_cell}>
        {date} at {time}
      </span>
      <div className={styles.buttons_container}>
        <button
          className={styles.button_edit}
          onClick={(e) => onEdit(e, expense)}
        />
        <button
          className={styles.button_delete}
          onClick={(e) => onDelete(e, expense._id)}
        />
      </div>
    </li>
  );
}

export default TabRow;
