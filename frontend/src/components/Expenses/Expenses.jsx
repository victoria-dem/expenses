import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExpenses } from '../../services/actions/expenses';
import Modal from '../Modal/Modal';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';

function Expenses(props) {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const { expenses } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  console.log(expenses);

  const handleAddButtonClick = () => {
    setIsModal(true);
  };

  const onCloseClick = () => {
    setIsModal(false);
  };

  const modal = (
    <Modal header={'Add Expense'} onClose={onCloseClick}>
      <AddExpenseForm />
      {/*/!*{itemToView && <IngredientsDetails item={itemToView} />}*!/*/}
      {/*{itemToView && <IngredientsDetails />}*/}
      {/*{number && <OrderDetails order={number} />}*/}
      {/*{isOrderInvalid && (*/}
      {/*  <p className='text text_type_main-large pb-5'>*/}
      {/*    Добавьте булку в ваш бургер*/}
      {/*  </p>*/}
      {/*)}*/}
    </Modal>
  );

  return (
    <div>
      <button onClick={handleAddButtonClick}>Add new expenses</button>

      {isModal && modal}
    </div>
  );
}

export default Expenses;
