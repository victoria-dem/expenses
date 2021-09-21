import React from 'react';
import styles from './ExpenseForm.module.css';

function ExpenseForm({ inputValues, onSubmit, onChange, type }) {
  return (
    <form
      onSubmit={(event) => onSubmit(event, type)}
      className={styles.form}
      name='add-expenses'
    >
      <label className={styles.label}>
        Description*
        <input
          onChange={onChange}
          value={inputValues.description}
          type='text'
          id='description'
          className={styles.input}
          name='description'
          required
          placeholder={
            type === 'add' ? 'Enter description' : inputValues.description
          }
          minLength='2'
          maxLength='40'
          autoComplete='off'
        />
      </label>
      <label className={styles.label}>
        Amount*
        <input
          onChange={onChange}
          value={inputValues.amount}
          type='number'
          id='amount'
          className={styles.input}
          name='amount'
          required
          placeholder={type === 'add' ? 'Only digits' : inputValues.amount}
          autoComplete='off'
        />
      </label>
      <button className={styles.add_button} type='submit'>
        {type === 'add' ? 'Add' : 'Save'}
      </button>
    </form>
  );
}

export default ExpenseForm;
