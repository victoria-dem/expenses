import React, { useState } from 'react';
import styles from './AddExpenseForm.module.css';

function AddExpenseForm(props) {
  const [inputValues, setInputValues] = useState({
    description: '',
    amount: 0,
    taxes: 0,
    date: null,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValues);
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInputValues({ ...inputValues, [name]: value });
    // setErrors({ ...errors, [name]: target.validationMessage });
    // setIsValid(target.closest('form').checkValidity());
  };

  return (
    <div>
      <form
        onSubmit={onSubmit}
        className={styles.form}
        name='add-expenses'
        noValidate
      >
        <label>
          Description*
          <input
            onChange={handleChange}
            value={inputValues.description}
            type='text'
            id='description'
            // className={
            //   errors?.description
            //     ? 'form-auth__text form-auth__text_error'
            //     : 'form-auth__text '
            // }
            name='description'
            pattern='[a-zA-Z- ]'
            required
            placeholder='Enter description'
            minLength='2'
            maxLength='40'
            autoComplete='off'
          />
        </label>
        <label>
          Amount
          <input
            onChange={handleChange}
            value={inputValues.amount}
            type='number'
            id='amount'
            // className={
            //   errors?.description
            //     ? 'form-auth__text form-auth__text_error'
            //     : 'form-auth__text '
            // }
            name='amount'
            pattern='[0-9]+'
            required
            placeholder='Only digits'
            // minLength='2'
            // maxLength='40'
            autoComplete='off'
          />
        </label>
        <label>
          Taxes*
          <input
            onChange={handleChange}
            value={inputValues.taxes}
            type='number'
            id='taxes'
            // className={
            //   errors?.description
            //     ? 'form-auth__text form-auth__text_error'
            //     : 'form-auth__text '
            // }
            name='taxes'
            pattern='[0-9]+'
            required
            placeholder='Only digits'
            minLength='1'
            // maxLength='40'
            autoComplete='off'
          />
        </label>
        <label>
          Date
          <input
            onChange={handleChange}
            value={inputValues.description}
            type='date'
            id='name-input'
            // className={
            //   errors?.description
            //     ? 'form-auth__text form-auth__text_error'
            //     : 'form-auth__text '
            // }
            name='date'
            // pattern='[a-zA-Z- ]'
            // required
            placeholder='Enter date'
            // minLength='2'
            // maxLength='40'
            autoComplete='off'
          />
        </label>
        <button
          // disabled={!isValid}
          className='form-auth__button hover'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddExpenseForm;
