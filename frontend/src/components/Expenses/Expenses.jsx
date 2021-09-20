import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpense, getExpenses } from '../../services/actions/expenses';
import Modal from '../Modal/Modal';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import TabRow from '../TabRow/TabRow';
import { TAX } from '../../utils/constant';
import styles from './Expenses.module.css';

function Expenses(props) {
  const [isModal, setIsModal] = useState(false);
  const [inputValues, setInputValues] = useState({
    description: '',
    amount: 0,
  });
  const [formType, setFormType] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();
  const { expenses } = useSelector((store) => store);
  const subTotal = useSelector((store) => {
    return store.expenses.reduce((a, b) => a + b.amount, 0);
  });
  const total = useSelector((store) => {
    return store.expenses.reduce((a, b) => a + b.amount * TAX + b.amount, 0);
  });

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  const handleAddButtonClick = () => {
    setIsModal(true);
    setFormType('add');
  };

  const handleEditButtonClick = () => {
    setIsModal(true);
    setFormType('edit');
  };
  const handleDeleteClick = () => {};

  const handleClose = () => {
    setIsModal(false);
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense(inputValues));
    setInputValues({ description: '', amount: 0 });
    setIsModal(false);
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const modal = (
    <Modal header={'Add Expense'} onClose={handleClose}>
      <AddExpenseForm
        onSubmit={handleAddSubmit}
        inputValues={inputValues}
        onChange={handleChange}
        type={formType}
      />
    </Modal>
  );

  return (
    <main>
      <div className={styles.intro}>
        <p className={styles.summary}>
          The subtotal of expenses is {subTotal} $
        </p>
        <p className={styles.summary}>
          The total with taxes is{' '}
          {Math.round((total + Number.EPSILON) * 100) / 100} $
        </p>
        <button className={styles.add_button} onClick={handleAddButtonClick}>
          Add new expenses
        </button>
      </div>
      {isModal && modal}
      <section>
        <div className={styles.table_header}>
          <p>Description</p>
          <p>Amount</p>
          <p>Taxes(15%)</p>
          <p>Date</p>
        </div>
        <ul className={styles.list}>
          {expenses.map((item) => (
            <TabRow
              key={item._id}
              expense={item}
              onDelete={handleDeleteClick}
              onEdit={handleEditButtonClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Expenses;
