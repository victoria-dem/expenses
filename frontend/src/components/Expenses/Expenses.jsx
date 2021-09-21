import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addExpense,
  editExpense,
  getExpenses,
  deleteExpense,
} from '../../services/actions/expenses';
import Modal from '../Modal/Modal';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
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
  const [itemEdit, setItemEdit] = useState(null);

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

  const handleEditButtonClick = (e, expense) => {
    setIsModal(true);
    setFormType('edit');
    setInputValues({
      description: expense.description,
      amount: expense.amount,
    });
    setItemEdit(expense._id);
  };

  const handleSubmit = (event, type) => {
    event.preventDefault();
    if (type === 'add') {
      dispatch(addExpense(inputValues));
    } else {
      dispatch(editExpense(inputValues, itemEdit));
      setItemEdit(null);
    }
    setInputValues({ description: '', amount: 0 });
    setIsModal(false);
  };

  const handleDeleteClick = (e, expenseId) => {
    dispatch(deleteExpense(expenseId));
  };

  const handleClose = () => {
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
    <Modal type={formType} onClose={handleClose}>
      <ExpenseForm
        onSubmit={handleSubmit}
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
      {expenses && expenses.length > 0 && (
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
      )}
    </main>
  );
}

export default Expenses;
